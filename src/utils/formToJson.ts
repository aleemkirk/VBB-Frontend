export interface JSONData {
  [key: string]: FormDataEntryValue;
}

const formToJson = (form: HTMLFormElement): JSONData => {
  const formData = new FormData(form);
  const jsonData: JSONData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }
  return jsonData;
};

export default formToJson;
