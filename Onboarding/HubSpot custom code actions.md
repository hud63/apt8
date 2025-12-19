**When to use HubSpot custom code actions:**

- Prefer them when possible — workflows have more advanced triggers than external webhooks
- Example: When someone unsubscribes, there’s no webhook for that, you’d have to continuously poll the API. But in a workflow, you can just use unsubscribe as a trigger filter

**Limitations:**

- 15 second timeout
- 5 MB memory limit
- Example: If you’re generating PDFs or saving an entire database, send that processing externally

**Why CCAs are valuable:**

- Can return data to continue the workflow
- Example: Based on a CCA result, you can send a specific email or enroll someone in a sequence — the CCA returns the next step to keep the flow going

**External webhooks tradeoff:**

- Webhooks don’t wait for responses — they fire into the void
- Example: If you send a webhook to Firebase, it won’t wait for a response. You’d have to have Firebase webhook back into another workflow to complete the next part

**Bottom line:**

- CCAs call the same API endpoints you’d use externally — no inherent advantage there
- The value is the triggers + ability to chain workflow steps based on returned data