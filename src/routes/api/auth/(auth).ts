import { APIEvent, json } from "solid-start/api";

export function GET({ request, params, env, $type, fetch }: APIEvent) {
  console.log({ request, params, env, $type, fetch });
}
