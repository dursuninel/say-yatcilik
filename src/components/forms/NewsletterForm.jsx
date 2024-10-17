import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const NewsletterForm = () => {
  const { t } = useTranslation();

  // Formik ile formu yönetme
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("form.validation.invalidEmail"))
        .required(t("form.validation.email")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // POST isteği gönderme
        const response = await axios.post("/addNewsletter", values);

        // insertId varsa, başarılı mesajı göster
        if (response.data.insertId) {
          toast.success(t("toast.successNewsletter"));
          resetForm();
        }
      } catch (error) {
        toast.error(t("toast.errorNewsletter"));
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder={t("form.email")}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.email && formik.errors.email ? "input-error" : ""
          }
        />

        <button className="btn-style" type="submit">
          {t("form.register")}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
