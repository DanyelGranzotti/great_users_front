export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const dateMask = (value) => {
  var date = value.match(/\d+/g),
    year = date[0],
    month = date[1],
    day = date[2];

  return day + "/" + month + "/" + year;
};

export const rgMask = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
  return value;
};

export const calcAge = (value) => {
  var date = value.match(/\d+/g),
    year = date[0],
    month = date[1],
    day = date[2];

  var today = new Date();
  var birthDate = new Date(year, month, day);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const nameCase = (name) => {
  var splitName = name.toLowerCase().split(" ");
  for (var i = 0; i < splitName.length; i++) {
    splitName[i] =
      splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);
  }
  return splitName.join(" ");
};
