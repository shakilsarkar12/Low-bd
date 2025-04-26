import { toast } from "react-toastify";

const getStoredLawyers = () => {
  const storedData = localStorage.getItem("lawers");

  if (storedData) {
    const storedLawyers = JSON.parse(storedData);
    return storedLawyers;
  } else {
    return [];
  }
};

const addToLStorage = (id,name) => {
  const storedLawyers = getStoredLawyers();
  if (storedLawyers.includes(id)) {
      toast.error(`Appointment Allready scheduled for Today`);
  } else {
    storedLawyers.push(id);
    const data = JSON.stringify(storedLawyers);
    localStorage.setItem("lawers", data);
    toast.success(`Appointment Scheduled for ${name} Successfully`);
  }
};

export { addToLStorage, getStoredLawyers };
