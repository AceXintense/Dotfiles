schema_version = 1

project {
  license = "MPL-2.0"

  # (OPTIONAL) A list of globs that should not have copyright/license headers.
  # Supports doublestar glob patterns for more flexibility in defining which
  # files or folders should be ignored
  header_ignore = [
    ".github/ISSUE_TEMPLATE/**",
    "testFixture/**",
    "test/fixtures/**",
  ]
}
