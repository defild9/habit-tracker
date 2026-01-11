export const StateKeyConst = {
  ONBOARDING_COMPLETE: "ONBOARDING_COMPLETE",
  THEME: "THEME",
  USERNAME: "USERNAME",
} as const;

export type StateKeyType = ValueOf<typeof StateKeyConst>;
