// Site feature flags.
//
// SHOW_APPROVAL_STATUS — the CEWA/approval layer. Turned OFF for the public
// build: the approval data came from an internal (non-public) source, so it
// must not be published. With this false, all approval badges, the approval
// filter, the status legend/footer, and the CEWA-framed copy are hidden, and
// tool `cewaStatus` values are reset to "not-reviewed" in tools.json.
//
// To re-enable (e.g. if an authorised/public source is confirmed): set this to
// true and repopulate each tool's `cewaStatus` / `cewaProvided` (the prior
// values are recoverable from git history). Nothing else needs rewiring.
export const SHOW_APPROVAL_STATUS = false;
