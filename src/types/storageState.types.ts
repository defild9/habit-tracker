export const StateKeyConst = {
  ONBOARDING_COMPLETE: "ONBOARDING_COMPLETE",
  THEME: "THEME",
} as const;

export type StateKeyType = ValueOf<typeof StateKeyConst>;
