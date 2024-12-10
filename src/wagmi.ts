import { getDefaultConfig } from "connectkit";
import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";

export const config = createConfig(
  getDefaultConfig({
    chains: [base],
    walletConnectProjectId: 'f129e5417cf3b4d9965c6c17e8719cdc',
    appName: "Billboard",
    coinbaseWalletPreference: "all", //   options: 'all' | 'smartWalletOnly' | 'eoaOnly'
    transports: {
      [base.id]: http(),
      // [mainnet.id]: http(),
    },
  }),
);

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
