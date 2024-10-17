import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { ApiContext } from "../../context/ApiContext";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";

const GetQuote = ({ value, setState }) => {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation(); // i18n hook

  const [yachts, setYachts] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const options = apiControl.yachts.value.map((item) => ({
      label: item.title,
      value: item.title,
    }));
    setYachts(options);

    formik.setValues({
      yacht: value,
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      yacht: "",
      message: "",
    },
    enableReinitialize: true, // Formik'i dinamik veri güncellemelerinde yeniden başlatır

    validationSchema: Yup.object({
      fullName: Yup.string().required(t("form.validation.fullName")),
      email: Yup.string()
        .email(t("form.validation.invalidEmail"))
        .required(t("form.validation.email")),
      phone: Yup.string().required(t("form.validation.phone")),
      yacht: Yup.string().required(t("form.validation.yacht")),
      message: Yup.string().required(t("form.validation.message")),
    }),
    onSubmit: (values, { resetForm }) => {
      try {
        setSending(true);
        axios.post("/addOffer", values).then((res) => {
          const data = res.data;

          if (data.insertId) {
            toast.success(
              <>
                <div>
                  <strong>{t("toast.successTitle")}</strong>
                  <div>{t("toast.success")}</div>
                </div>
              </>
            );

            resetForm();
            setState(false);
          } else {
            toast.error(
              <>
                <div>
                  <strong>{t("toast.errorTitle")}</strong>
                  <div>{t("toast.error")}</div>
                </div>
              </>
            );
          }
          setSending(false);
        });
      } catch (error) {
        setSending(false);

        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-fluid form_style">
        <div className="p-field">
          <label htmlFor="fullName">{t("form.labels.fullName")}</label>
          <InputText
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.fullName && formik.errors.fullName
                ? "p-invalid"
                : ""
            }
          />
        </div>

        <div className="p-field">
          <label htmlFor="email">{t("form.labels.email")}</label>
          <InputText
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "p-invalid" : ""
            }
          />
        </div>

        <div className="p-field">
          <label htmlFor="phone">{t("form.labels.phone")}</label>
          <InputText
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.phone && formik.errors.phone ? "p-invalid" : ""
            }
          />
        </div>

        <div className="p-field">
          <label htmlFor="yacht">{t("form.labels.yacht")}</label>
          <Dropdown
            id="yacht"
            name="yacht"
            value={formik.values.yacht}
            options={yachts}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("form.placeholders.selectYacht")}
            className={
              formik.touched.yacht && formik.errors.yacht ? "p-invalid" : ""
            }
          />
        </div>

        <div className="p-field">
          <label htmlFor="message">{t("form.labels.message")}</label>
          <InputTextarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
            className={
              formik.touched.message && formik.errors.message ? "p-invalid" : ""
            }
          />
        </div>
      </div>

      <button type="submit" disabled={sending} className="btn-style w-100">
        {t("form.buttons.submit")}
      </button>
    </form>
  );
};

export default GetQuote;
