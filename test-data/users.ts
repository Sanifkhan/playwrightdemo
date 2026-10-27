export type TestUser = {
  username: string;
  password: string;
};

export const users = {
  standard: {
    username: process.env.SAUCE_DEMO_USERNAME ?? 'standard_user',
    password: process.env.SAUCE_DEMO_PASSWORD ?? 'secret_sauce',
  },
  lockedOut: {
    username: process.env.SAUCE_DEMO_LOCKED_USER ?? 'locked_out_user',
    password: process.env.SAUCE_DEMO_PASSWORD ?? 'secret_sauce',
  },
} satisfies Record<string, TestUser>;
