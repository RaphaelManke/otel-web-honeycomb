"use client";

import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { HoneycombWebSDK } from "@honeycombio/opentelemetry-web";

export default function Observability(){

  const sdk = new HoneycombWebSDK({
    debug: true,
    //   endpoint: "https://api.honeycomb.io/v1/traces", // US instance
    endpoint: "https://api.eu1.honeycomb.io/v1/traces", // EU instance
    apiKey: process.env["HONEYCOMB_API_KEY"], // Replace with your Honeycomb Ingest API Key
    serviceName: "dealbuilder-customer-frontend", // Replace with your application name. Honeycomb will name your dataset using this variable.
    instrumentations: [getWebAutoInstrumentations()],
    //   resourceAttributes: {
    //     "user.id": user.id, // specific to your app
    //     "user.role": user.role, // specific to your app
    //   },
  });

  sdk.start();

  return null;
}