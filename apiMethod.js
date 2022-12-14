const express = require("express");
const app = express();
const spFunction = require("./storedProcedure");
const middleware = require("./middleware");
const sql = require("mssql");
const jwt = require("jsonwebtoken");
const secretKey = require("./config");
const token = require("./verify-token");

//#region KATEGORİ
const kategoriList = app.get(
  "/kategoriList",
  token.tokenGirisKontrol,
  async (req, res) => {
    try {
      const spKategoriListRes = await spFunction.spKategoriList();
      res.send(spKategoriListRes.recordset);
    } catch (error) {
      res.send(error.message);
    }
  }
);

const kategoriEkle = app.post(
  "/kategoriEkle",
  middleware.bosAlanKategoriAd,
  token.tokenGirisKontrol,
  async (req, res) => {
    const { KategoriAdi } = req.body;
    try {
      const spKategoriEkleRes = await spFunction.spKategoriEkle(KategoriAdi);

      if (
        spKategoriEkleRes &&
        spKategoriEkleRes.recordset &&
        spKategoriEkleRes.recordset.length > 0
      ) {
        if (spKategoriEkleRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Kategori Eklendi" });
        } else {
          res.send({ responseCode: -300, message: "Hata" });
        }
      }
    } catch (err) {
      res.send(err.message);
    }
  }
);

const kategoriGuncelle = app.put(
  "/kategoriGuncelle",
  middleware.bosAlanKategoriID,
  middleware.bosAlanKategoriAd,
  token.tokenGirisKontrol,
  async (req, res) => {
    const { KategoriId, KategoriAdi } = req.body;

    try {
      const spKategoriGuncelleRes = await spFunction.spKategoriGuncelle(
        KategoriId,
        KategoriAdi
      );

      if (
        spKategoriGuncelleRes &&
        spKategoriGuncelleRes.recordset &&
        spKategoriGuncelleRes.recordset.length > 0
      ) {
        if (spKategoriGuncelleRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Kategori Güncellendi" });
        } else {
          res.send({ responseCode: -300, message: "Bu kategori bulunamadı!" });
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);

const kategoriSil = app.delete(
  "/kategoriSil",
  middleware.bosAlanKategoriID,
  token.tokenGirisKontrol,
  async (req, res) => {
    const { KategoriId } = req.body;

    try {
      const spKategoriSilRes = await spFunction.spKategoriSil(KategoriId);
      if (
        spKategoriSilRes &&
        spKategoriSilRes.recordset &&
        spKategoriSilRes.recordset.length > 0
      ) {
        if (spKategoriSilRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Kategori Silindi" });
        } else {
          res.send({ responseCode: -300, message: "Bu kategori bulunamadı!" });
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);

//#endregion

//#region ÜRÜN
const urunList = app.get(
  "/urunList",
  token.tokenGirisKontrol,
  async (req, res) => {
    try {
      const spUrunListRes = await spFunction.spUrunList();
      res.send(spUrunListRes.recordset);
    } catch (error) {
      res.send(error.message);
    }
  }
);

const urunEkle = app.post(
  "/urunEkle",
  // middleware.bosAlanUrun,
  token.tokenGirisKontrol,
  async (req, res) => {
    const {
      UrunAdi,
      UrunAciklama,
      UrunResimUrl,
      UrunFiyat,
      UrunStokAdedi,
      UrunKategoriID,
      UrunDurumuID,
    } = req.body;
    try {
      const spUrunEkleRes = await spFunction.spUrunEkle(
        UrunAdi,
        UrunAciklama,
        UrunResimUrl,
        UrunFiyat,
        UrunStokAdedi,
        UrunKategoriID,
        UrunDurumuID
      );
      if (
        spUrunEkleRes &&
        spUrunEkleRes.recordset &&
        spUrunEkleRes.recordset.length > 0
      ) {
        if (spUrunEkleRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Ürün Eklendi" });
        } else {
          res.send({ responseCode: -300, message: "Hata" });
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);

const urunGuncelle = app.put(
  "/urunGuncelle",
  // middleware.bosAlanUrun,
  token.tokenGirisKontrol,
  async (req, res) => {
    const {
      UrunID,
      UrunAdi,
      UrunAciklama,
      UrunResimUrl,
      UrunFiyat,
      UrunStokAdedi,
      UrunKategoriID,
      UrunDurumuID,
    } = req.body;

    try {
      const spUrunGuncelleRes = await spFunction.spUrunGuncelle(
        UrunID,
        UrunAdi,
        UrunAciklama,
        UrunResimUrl,
        UrunFiyat,
        UrunStokAdedi,
        UrunKategoriID,
        UrunDurumuID
      );
      if (
        spUrunGuncelleRes &&
        spUrunGuncelleRes.recordset &&
        spUrunGuncelleRes.recordset.length > 0
      ) {
        if (spUrunGuncelleRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Ürün Güncellendi" });
        } else {
          res.send({ responseCode: -300, message: "Hata" });
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);

const urunSil = app.delete(
  "/urunSil",
  middleware.bosAlanUrunId,
  token.tokenGirisKontrol,
  async (req, res) => {
    const { UrunID } = req.body;

    try {
      const spUrunSilRes = await spFunction.spUrunSil(UrunID);
      if (
        spUrunSilRes &&
        spUrunSilRes.recordset &&
        spUrunSilRes.recordset.length > 0
      ) {
        if (spUrunSilRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Ürün Silindi" });
        } else {
          res.send({ responseCode: -300, message: "Hata" });
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);

//#endregion

//#region SİPARİS

const siparisList = app.get(
  "/siparisList",
  token.tokenGirisKontrol,
  async (req, res) => {
    try {
      const spSiparisListRes = await spFunction.spsiparisList();
      res.send(spSiparisListRes.recordset);
    } catch (error) {
      res.send(error.message);
    }
  }
);

const siparisEkle = app.post(
  "/siparisEkle",
  // middleware.bosAlanSiparis,
  token.tokenGirisKontrol,
  async (req, res) => {
    const {
      MusteriNotu,
      IlID,
      AcikAdres,
      Telefon,
      Ad,
      Soyad,
      ToplamFiyat,
      Urunler,
    } = req.body;

    try {
      const spSiparisEkleRes = await spFunction.spSiparisEkle(
        MusteriNotu,
        IlID,
        AcikAdres,
        Telefon,
        Ad,
        Soyad,
        ToplamFiyat,
        Urunler
      );

      if (
        spSiparisEkleRes &&
        spSiparisEkleRes.recordset &&
        spSiparisEkleRes.recordset.length > 0
      ) {
        if (spSiparisEkleRes.recordset[0].ResponseCode === 100) {
          const siparisId = spSiparisEkleRes.recordset[0].SiparisID;

          for (let i = 0; i < Urunler.length; i++) {
            const urun = Urunler[i];

            const siparUrunDbRes = await spFunction.spSiparisUrunEkle({
              siparisAdedi: urun.SiparisAdet,
              siparisId,
              urunId: urun.UrunId,
            });
          }

          res.send({ responseCode: 100, message: "Siparis Eklendi" });
        } else {
          res.send({ responseCode: -300, message: "Hata" });
        }
      } else {
        res.send({ responseCode: -300, message: "Hata" });
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);

const siparisGuncelle = app.put(
  "/siparisGuncelle",
  middleware.bosAlanSiparis,
  token.tokenGirisKontrol,
  async (req, res) => {
    const { ID, SiparisDurumID } = req.body;

    try {
      const spSiparisGuncelleRes = await spFunction.spSiparisGuncelle(
        ID,
        SiparisDurumID
      );

      if (
        spSiparisGuncelleRes &&
        spSiparisGuncelleRes.recordset &&
        spSiparisGuncelleRes.recordset.length > 0
      ) {
        if (spSiparisGuncelleRes.recordset[0].ResponseCode === 100) {
          res.send({ responseCode: 100, message: "Siparis Güncellendi" });
        } else {
          res.send({ responseCode: -300, message: "Hata" });
        }
      }
    } catch (error) {
      res.send(error.message);
    }
  }
);
//#endregion

//#region URUN DETAY
const urunDetayList = app.post(
  "/urunDetayList",
  token.tokenGirisKontrol,
  async (req, res) => {
    const { Id } = req.body;
    try {
      const spUrunDetayListRes = await spFunction.spUrunDetayList(Id);
      res.send(spUrunDetayListRes.recordset[0]);
    } catch (error) {
      res.send(error.message);
    }
  }
);
//#endregion

//#region İLLER
const ilList = app.get("/ilList", token.tokenGirisKontrol, async (req, res) => {
  try {
    const spIlListRes = await spFunction.spIlList();
    res.send(spIlListRes.recordset);
  } catch (error) {
    res.send(error.message);
  }
});
//endregion

//#region LOGIN
const login = app.post("/login", async (request, response) => {
  const { email, sifre } = request.body;
  try {
    const spLoginRes = await spFunction.spLogin(email, sifre);

    if (spLoginRes && spLoginRes.recordset && spLoginRes.recordset.length > 0) {
      if (spLoginRes.recordset[0].ResponseCode === 100) {
        const kullaniciID = spLoginRes.recordset[0].KullaniciID;
        const payLoad = {
          email,
          sifre,
          kullaniciID,
        };
        const token = jwt.sign(payLoad, request.app.get("api_secret_key"), {
          expiresIn: "1h",
        });
        response.json({
          responseCode: 100,
          message: "Basarili",
          token,
        });
      } else {
        response.send({ responseCode: -300, message: "Kullanici Bulunamadi!" });
      }
    }
  } catch (error) {
    response.send(error.message);
  }
});

//endregion

//#region TOKEN KONTROL
// const tokenKontrol = app.get("/token", async (request, response) => {
//   const { token } = request.headers;
//   try {
//     const verification = jwt.verify(token, secretKey.api_secret_key);
//     if (verification ){
//       response.send({
//         responseCode: 100,
//         message: "token ile giris basarili",
//         // decoded: verification._doc,
//       });
//     } else {
//       response.send({
//         responseCode: -300,
//         message: "token ile giris basarisiz",
//       });
//     }
//   } catch (error) {
//     response.send(error.message);
//   }
// });

//endregion

//#region SİPARİSDETAY
const siparisDetayList = app.post(
  "/siparisDetayList",
  token.tokenGirisKontrol,
  async (req, res) => {
    const { Id } = req.body;
    try {
      const spSiparisDetayListRes = await spFunction.spSiparisDetayList(Id);

      const siparisDetayObj = {
        ...spSiparisDetayListRes.recordset[0],
        urunler: [],
      };

      for (let i = 0; i < spSiparisDetayListRes.recordsets.length; i++) {
        const recordset = spSiparisDetayListRes.recordsets[i];
        if (i === 1) {
          // for (let k = 0; k < recordset.length; k++) {
          //   const recordset2 = recordset[k];

          //   siparisDetayObj.items.push(recordset2)
          // }

          siparisDetayObj.urunler.push(...recordset);
        }

        // siparisDetayObj.urunler = urunler;
      }
      res.send(siparisDetayObj);
    } catch (error) {
      res.send(error.message);
    }
  }
);
//#endregion

//#region URUNDURUMLIST

const urunDurumList = app.get(
  "/urunDurumList",
  token.tokenGirisKontrol,
  async (req, res) => {
    try {
      const spurunDurumListRes = await spFunction.spUrunDurumList();
      res.send(spurunDurumListRes.recordset);
    } catch (error) {
      res.send(error.message);
    }
  }
);

//#endregion

//#region SIPARISDURUMLIST

const siparisDurumList = app.get(
  "/siparisDurumList",
  token.tokenGirisKontrol,
  async (req, res) => {
    try {
      const spSiparisDurumListRes = await spFunction.spSiparisDurumList();
      res.send(spSiparisDurumListRes.recordset);
    } catch (error) {
      res.send(error.message);
    }
  }
);

//#endregion

module.exports = app;
