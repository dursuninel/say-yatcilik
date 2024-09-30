export default function OnlyNumberFormik(formik, name, value) {
  const numericValue = value.replace(/[^0-9]/g, "");
  formik.setFieldValue(name, numericValue);
}
