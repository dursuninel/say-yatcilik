import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form doğrulama şeması
  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("validation.fullName")),
    email: Yup.string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.email")),
    phone: Yup.string().required(t("validation.phone")),
    message: Yup.string().required(t("validation.message")),
  });

  // Formik kullanımı
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post("/addContact", values);
        if (response.data.insertId) {
          toast.success(
            <>
              <div>
                <strong>{t("toast.successTitle")}</strong>
                <div>{t("toast.success")}</div>
              </div>
            </>
          );
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
        resetForm();
      } catch (error) {
        toast.error(
          <>
            <div>
              <strong>{t("toast.errorTitle")}</strong>
              <div>{t("toast.error")}</div>
            </div>
          </>
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="contact-form-flex">
        <div>
          <label htmlFor="fullName">{t("form.name")}</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder={t("form.name")}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.fullName && formik.errors.fullName
                ? "input-error"
                : ""
            }
          />
        </div>

        <div>
          <label htmlFor="email">{t("form.email")}</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={t("form.email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }
          />
        </div>

        <div>
          <label htmlFor="phone">{t("form.phone")}</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder={t("form.phone")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.phone && formik.errors.phone ? "input-error" : ""
            }
          />
        </div>

        <div className="one-input">
          <label htmlFor="message">{t("form.message")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("form.message")}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.message && formik.errors.message
                ? "input-error"
                : ""
            }
          />
        </div>

        <button type="submit" className="btn-style" disabled={isSubmitting}>
          {t("form.send")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
