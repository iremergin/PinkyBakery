const express = require("express");
const app = express();
const spFunction = require("./storedProcedure");
const middleware = require("./middleware");
const sql = require("mssql");

//#region KATEGORİ
const kategoriList = app.get("/kategoriList", async (req, res) => {
  try {
    const spKategoriListRes = await spFunction.spKategoriList();
    res.send(spKategoriListRes.recordset);
  } catch (error) {
    res.send(error);
  }
});

const kategoriEkle = app.post(
  "/kategoriEkle",
  middleware.bosAlanKategoriAd,
  async (req, res) => {
    const { KategoriAdi } = req.body;

    try {
      const spKategoriEkleRes = await spFunction.spKategoriEkle(
        "Ad",
        sql.VarChar(100),
        KategoriAdi
      );
      res.send("Kategori Eklendi");
    } catch (err) {
      res.send(err.message);
    }
  }
);

const kategoriGuncelle = app.put(
  "/kategoriGuncelle",
  middleware.bosAlanKategoriID,
  middleware.bosAlanKategoriAd,
  async (req, res) => {
    const { KategoriId, KategoriAdi } = req.body;

    try {
      const spKategoriGuncelleRes = await spFunction.spKategoriGuncelle(
        "ID",
        "Ad",
        sql.Int,
        sql.VarChar(100),
        KategoriId,
        KategoriAdi
        // "ID", sql.Int, KategoriId,
        // "Ad", sql.VarChar(100), KategoriAdi
      );

      res.send("Kategori Güncellendi");
    } catch (error) {
      res.send(error);
    }
  }
);

const kategoriSil = app.delete(
  "/kategoriSil",
  middleware.bosAlanKategoriID,
  async (req, res) => {
    const { KategoriId } = req.body;

    try {
      const spKategoriSilRes = await spFunction.spKategoriSil(
        "ID",
        sql.Int,
        KategoriId
      );
      res.send("Kategori Silindi");
    } catch (error) {
      res.send(error);
    }
  }
);

//#endregion

//#region ÜRÜN
const urunList = app.get("/urunList", async (req, res) => {
  try {
    const spKUrunListRes = await spFunction.spUrunList();
    res.send(spKUrunListRes.recordset);
  } catch (error) {
    res.send(error);
  }
});

const urunEkle = app.post(
  "/urunEkle",
  // middleware.bosAlanUrun,
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
        "Ad",
        "Aciklama",
        "ResimUrl",
        "Fiyat",
        "StokAdedi",
        "KategoriID",
        "UrunDurumuID",
        sql.VarChar(100),
        sql.VarChar(250),
        sql.VarChar(200),
        sql.Money,
        sql.Int,
        sql.Int,
        sql.Int,
        UrunAdi,
        UrunAciklama,
        UrunResimUrl,
        UrunFiyat,
        UrunStokAdedi,
        UrunKategoriID,
        UrunDurumuID
      );
      res.send("Ürün Eklendi.");
    } catch (error) {
      res.send(error);
    }
  }
);

const urunGuncelle = app.put(
  "/urunGuncelle",
  //middleware.bosAlanUrun,
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
        "ID",
        "Ad",
        "Aciklama",
        "ResimUrl",
        "Fiyat",
        "StokAdedi",
        "KategoriID",
        "UrunDurumuID",
        sql.Int,
        sql.VarChar(100),
        sql.VarChar(250),
        sql.VarChar(200),
        sql.Money,
        sql.Int,
        sql.Int,
        sql.Int,
        UrunID,
        UrunAdi,
        UrunAciklama,
        UrunResimUrl,
        UrunFiyat,
        UrunStokAdedi,
        UrunKategoriID,
        UrunDurumuID
      );

      res.send("Ürün Güncellendi");
    } catch (error) {
      res.send(error);
    }
  }
);

const urunSil = app.delete(
  "/urunSil",
  //middleware.bosAlanUrun,
  async (req, res) => {
    const { UrunId } = req.body;

    try {
      const spKategoriSilRes = await spFunction.spUrunSil(
        "ID",
        sql.Int,
        UrunId
      );
      res.send("Ürün Silindi");
    } catch (error) {
      res.send(error);
    }
  }
);

//#endregion

module.exports = app;
