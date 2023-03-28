import { IP_ENDPOINT_URL } from "./constants";

interface IpResponse {
  ip: string;
}

const handleResponse = async (
  response: Response
): Promise<IpResponse | null> => {
  if (response.ok) {
    const json = await response.json();
    return json;
  }

  return null;
};

export const getIp = async () => fetch(IP_ENDPOINT_URL).then(handleResponse);

export const getCurrentTimeStamp = (): number => new Date().getTime();
