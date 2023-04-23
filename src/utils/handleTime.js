import moment from "moment-timezone";

export const getUserTimeZone = () => {
	return moment.tz.guess();
};

export const getCurrentTimeISO = () => {
	return moment().format();
};
