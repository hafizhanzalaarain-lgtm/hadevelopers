export async function postLead(payload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Unable to submit request");
  }

  return response.json();
}

export async function checkDomain(domain) {
  const response = await fetch(`/api/domain-search?domain=${encodeURIComponent(domain)}`);
  if (!response.ok) {
    throw new Error("Unable to check domain");
  }
  return response.json();
}

export async function getAdminOverview() {
  const response = await fetch("/api/admin/overview");
  if (!response.ok) {
    throw new Error("Unable to load admin overview");
  }
  return response.json();
}

export async function createAdminRecord(resource, payload) {
  const response = await fetch(`/api/admin/${resource}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Unable to create record");
  return data;
}

export async function updateAdminRecord(resource, id, payload) {
  const response = await fetch(`/api/admin/${resource}/${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Unable to update record");
  return data;
}

export async function deleteAdminRecord(resource, id) {
  const response = await fetch(`/api/admin/${resource}/${encodeURIComponent(id)}`, {
    method: "DELETE"
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Unable to delete record");
  return data;
}
