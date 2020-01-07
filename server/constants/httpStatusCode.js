const HttpStatusCode = {
  success: {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204
  },
  error: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    EMPID_MISSING: 503,
    EMPID_MISMATCH: 504,
    RACF_MISSING: 505,
    RACF_MISMATCH: 506,
    ENV_VARIABLE_MISSING: 507,
    ENV_VARIABLE_MISMATCH: 508,
    ENV_NOT_KNOWN: 509,
    PASSWORD_MISSING: 510,
    PASSWORD_LENGTH: 511,
    INTERNAL_SERVER_ERROR: 500,
    NO_JSON: 501,
    INVALID_JSON: 502,
    EMP_MISSING_ACC_NUMBER: 512
  }
};

module.exports = HttpStatusCode;