import { createAemClient } from './auth';
import axios from "axios";

const publishBase = import.meta.env.AEM_PUBLISH_BASE || '';
const token = import.meta.env.AEM_PUBLISH_TOKEN || null;
const client = createAemClient({ baseURL: publishBase, token });

export async function fetchAemModel(path) {
  const modelUrl = `${path}.model.json`;
  const res = await client.get(modelUrl);
  return res.data;
}

export async function fetchGraphQL(path, variation) {
  const res = await axios.get('/content/cq:graphql/standard/execute.json/GetText;'+path+';'+variation);
  return res.data;
}
