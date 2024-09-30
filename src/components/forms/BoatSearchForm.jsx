import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import OnlyNumberFormik from "../OnlyNumberFormik";

const BoatSearchForm = () => {
  const formik = useFormik({
    initialValues: {
      boatType: "",
      heightMin: "",
      heightMax: "",
      heightFt: "",
      priceMin: "",
      priceMax: "",
      priceEuro: "",
    },
    validationSchema: Yup.object({
      boatType: Yup.string().required("Tekne tipi gerekli"),
      heightMin: Yup.number()
        .min(1, "En az 1 olmalı")
        .required("Minimum boy gerekli"),
      heightMax: Yup.number()
        .min(1, "En az 1 olmalı")
        .required("Maksimum boy gerekli"),
      heightFt: Yup.number()
        .min(1, "Geçerli bir feet değeri girin")
        .required("Feet bilgisi gerekli"),
      priceMin: Yup.number()
        .min(0, "Fiyat 0'dan küçük olamaz")
        .required("Minimum fiyat gerekli"),
      priceMax: Yup.number()
        .min(0, "Fiyat 0'dan küçük olamaz")
        .required("Maksimum fiyat gerekli"),
      priceEuro: Yup.number()
        .min(1, "Geçerli bir euro değeri girin")
        .required("Euro bilgisi gerekli"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <form className="form-area" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="boatType">Tekne Tipi</label>
        <div className="input-group">
          <div className="one-input">
            <input
              type="text"
              name="boatType"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.boatType}
              className={
                formik.touched.boatType && formik.errors.boatType
                  ? "error-border"
                  : ""
              }
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="heightMin">Boy</label>
        <div className="input-group center">
          <div className="one-input">
            <input
              type="text"
              name="heightMin"
              placeholder="min"
              onChange={(e) =>
                OnlyNumberFormik(formik, "heightMin", e.target.value)
              }
              onBlur={formik.handleBlur}
              value={formik.values.heightMin}
              className={
                formik.touched.heightMin && formik.errors.heightMin
                  ? "error-border"
                  : ""
              }
              inputMode="numeric" // Mobilde sadece sayısal klavye açılır
            />
          </div>

          <div className="one-input">
            <input
              type="text"
              name="heightMax"
              placeholder="max"
              onChange={(e) =>
                OnlyNumberFormik(formik, "heightMax", e.target.value)
              }
              onBlur={formik.handleBlur}
              value={formik.values.heightMax}
              className={
                formik.touched.heightMax && formik.errors.heightMax
                  ? "error-border"
                  : ""
              }
              inputMode="numeric" // Mobilde sadece sayısal klavye açılır
            />
          </div>

          <div className="one-input">
            <input
              type="text"
              name="heightFt"
              placeholder="ft"
              onChange={(e) =>
                OnlyNumberFormik(formik, "heightFt", e.target.value)
              }
              inputMode="numeric" // Mobilde sadece sayısal klavye açılır
              onBlur={formik.handleBlur}
              value={formik.values.heightFt}
              className={
                formik.touched.heightFt && formik.errors.heightFt
                  ? "error-border"
                  : ""
              }
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="priceMin">Fiyat</label>
        <div className="input-group center">
          <div className="one-input">
            <input
              type="text"
              name="priceMin"
              placeholder="min"
              onChange={(e) =>
                OnlyNumberFormik(formik, "priceMin", e.target.value)
              }
              inputMode="numeric" // Mobilde sadece sayısal klavye açılır
              onBlur={formik.handleBlur}
              value={formik.values.priceMin}
              className={
                formik.touched.priceMin && formik.errors.priceMin
                  ? "error-border"
                  : ""
              }
            />
          </div>

          <div className="one-input">
            <input
              type="text"
              name="priceMax"
              placeholder="max"
              onChange={(e) =>
                OnlyNumberFormik(formik, "priceMax", e.target.value)
              }
              inputMode="numeric" // Mobilde sadece sayısal klavye açılır
              onBlur={formik.handleBlur}
              value={formik.values.priceMax}
              className={
                formik.touched.priceMax && formik.errors.priceMax
                  ? "error-border"
                  : ""
              }
            />
          </div>

          <div className="one-input">
            <input
              type="text"
              name="priceEuro"
              placeholder="euro"
              onChange={(e) =>
                OnlyNumberFormik(formik, "priceEuro", e.target.value)
              }
              inputMode="numeric" // Mobilde sadece sayısal klavye açılır
              onBlur={formik.handleBlur}
              value={formik.values.priceEuro}
              className={
                formik.touched.priceEuro && formik.errors.priceEuro
                  ? "error-border"
                  : ""
              }
            />
          </div>
        </div>
      </div>

      <div className="btn-group">
        <button type="submit" className="btn-style">Arama</button>
      </div>
    </form>
  );
};

export default BoatSearchForm;
