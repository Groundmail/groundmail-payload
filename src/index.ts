/**
 * Public entry for Payload CMS + Groundmail email adapter.
 * Implementation lives in the core SDK; this package exists for discoverability
 * (npm/GitHub search: payload + transactional email).
 */
export {
  groundmailAdapter,
  type PayloadEmailAdapter,
  type PayloadEmailAdapterInstance,
  type PayloadEmailAddress,
  type PayloadSendEmailOptions,
  type GroundmailPayloadAdapterArgs,
} from 'groundmail/payload'
