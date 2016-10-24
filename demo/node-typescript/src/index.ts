interface MetaData {
  API_URL: string;
}

declare const METADATA: MetaData;

const test: string = `METADATA : ${METADATA.API_URL}`;

console.log(test);
