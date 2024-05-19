/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VIACEP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
