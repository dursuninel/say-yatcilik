import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"; // navigate için gerekli import
import OnlyNumberFormik from "../OnlyNumberFormik";
import { useTranslation } from "react-i18next";
import { ApiContext } from "../../context/ApiContext";
import { Dropdown } from "primereact/dropdown";

const BoatSearchForm = ({ page, defaultValues, setCurrentPage }) => {
  const { t } = useTranslation();
  const { apiControl } = useContext(ApiContext);
  const navigate = useNavigate(); // Yönlendirme için useNavigate kullanımı

  const [categories, setCategories] = useState([
    {
      label: t("categories.starter"),
      value: "*",
    },
  ]);

  useEffect(() => {
    const options = apiControl.categories.value.map((item) => ({
      label: item.category,
      value: item.category,
    }));
    setCategories([...categories, ...options]);
  }, [apiControl.categories.value]);

  const formik = useFormik({
    initialValues: {
      boatType: defaultValues?.boatType || "",
      heightMin: defaultValues?.heightMin || "",
      heightMax: defaultValues?.heightMax || "",
      priceMin: defaultValues?.priceMin || "",
      priceMax: defaultValues?.priceMax || "",
    },
    onSubmit: (values) => {
      const filteredValues = Object.fromEntries(
        Object.entries(values).filter(
          ([_, value]) => value !== "" && value !== "*"
        )
      );
      const queryParams = new URLSearchParams(filteredValues).toString();
      navigate(`/yachts?${queryParams}`);
      window.scrollTo(0, 0);

      if (page) {
        setCurrentPage(1);
      }
    },
  });

  return (
    <form
      className={`form-area ${page ? "extra-gap" : ""}`}
      onSubmit={formik.handleSubmit}
    >
      <div>
        <div className="form-group">
          <label htmlFor="boatType">{t("home.boat_type")}</label>
          <div className="input-group">
            <div className="one-input">
              <Dropdown
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.boatType}
                options={categories}
                name="boatType"
                optionLabel="label"
                placeholder={t("categories.starter")}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="heightMin">{t("home.boat_height")}</label>
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
                inputMode="numeric"
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
                inputMode="numeric"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="priceMin">{t("home.boat_price")}</label>
          <div className="input-group center">
            <div className="one-input">
              <input
                type="text"
                name="priceMin"
                placeholder="min"
                onChange={(e) =>
                  OnlyNumberFormik(formik, "priceMin", e.target.value)
                }
                inputMode="numeric"
                onBlur={formik.handleBlur}
                value={formik.values.priceMin}
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
                inputMode="numeric"
                onBlur={formik.handleBlur}
                value={formik.values.priceMax}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="btn-group">
        <button type="submit" className="btn-style">
          {t("form.search")}
        </button>
      </div>
    </form>
  );
};

export default BoatSearchForm;
