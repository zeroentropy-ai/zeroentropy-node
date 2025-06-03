# Admin

Types:

- <code><a href="./src/resources/admin.ts">AdminCreateOrganizationResponse</a></code>

Methods:

- <code title="post /admin/create-organization">client.admin.<a href="./src/resources/admin.ts">createOrganization</a>({ ...params }) -> AdminCreateOrganizationResponse</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusGetStatusResponse</a></code>

Methods:

- <code title="post /status/get-status">client.status.<a href="./src/resources/status.ts">getStatus</a>({ ...params }) -> StatusGetStatusResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections.ts">CollectionDeleteResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionAddResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionGetListResponse</a></code>

Methods:

- <code title="post /collections/delete-collection">client.collections.<a href="./src/resources/collections.ts">delete</a>({ ...params }) -> CollectionDeleteResponse</code>
- <code title="post /collections/add-collection">client.collections.<a href="./src/resources/collections.ts">add</a>({ ...params }) -> CollectionAddResponse</code>
- <code title="post /collections/get-collection-list">client.collections.<a href="./src/resources/collections.ts">getList</a>() -> CollectionGetListResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentUpdateResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDeleteResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentAddResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetInfoResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetInfoListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetPageInfoResponse</a></code>

Methods:

- <code title="post /documents/update-document">client.documents.<a href="./src/resources/documents.ts">update</a>({ ...params }) -> DocumentUpdateResponse</code>
- <code title="post /documents/delete-document">client.documents.<a href="./src/resources/documents.ts">delete</a>({ ...params }) -> DocumentDeleteResponse</code>
- <code title="post /documents/add-document">client.documents.<a href="./src/resources/documents.ts">add</a>({ ...params }) -> DocumentAddResponse</code>
- <code title="post /documents/get-document-info">client.documents.<a href="./src/resources/documents.ts">getInfo</a>({ ...params }) -> DocumentGetInfoResponse</code>
- <code title="post /documents/get-document-info-list">client.documents.<a href="./src/resources/documents.ts">getInfoList</a>({ ...params }) -> DocumentGetInfoListResponsesGetDocumentInfoListCursor</code>
- <code title="post /documents/get-page-info">client.documents.<a href="./src/resources/documents.ts">getPageInfo</a>({ ...params }) -> DocumentGetPageInfoResponse</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryTopDocumentsResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryTopPagesResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryTopSnippetsResponse</a></code>

Methods:

- <code title="post /queries/top-documents">client.queries.<a href="./src/resources/queries.ts">topDocuments</a>({ ...params }) -> QueryTopDocumentsResponse</code>
- <code title="post /queries/top-pages">client.queries.<a href="./src/resources/queries.ts">topPages</a>({ ...params }) -> QueryTopPagesResponse</code>
- <code title="post /queries/top-snippets">client.queries.<a href="./src/resources/queries.ts">topSnippets</a>({ ...params }) -> QueryTopSnippetsResponse</code>

# Parsers

Types:

- <code><a href="./src/resources/parsers.ts">ParserParseDocumentResponse</a></code>

Methods:

- <code title="post /parsers/parse-document">client.parsers.<a href="./src/resources/parsers.ts">parseDocument</a>({ ...params }) -> ParserParseDocumentResponse</code>
