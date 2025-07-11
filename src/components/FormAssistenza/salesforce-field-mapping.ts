// Configurazione delle mappature dei campi Salesforce per ambiente
export interface SalesforceFieldMapping {
  applicant: string;
  address: string;
  phone: string;
  subject: string;
  object: string;
  description: string;
  notice: string;
}

// Configurazioni per ambiente
const fieldMappings: Record<string, SalesforceFieldMapping> = {
  development: {
    applicant: "00N7Q0000015NGO",
    address: "00N7Q000007qqu1",
    phone: "00N7Q000007qqts",
    subject: "00N7Q000007qqtk",
    object: "subject",
    description: "description",
    notice: "00N7Q000007qqu3",
  },
  production: {
    // In produzione potrebbero essere diversi
    applicant: "00N7Q0000015NGO",
    address: "00N7Q000007qqu1",
    phone: "00N7Q000007qqts",
    subject: "00N7Q000007qqtk",
    object: "subject",
    description: "description",
    notice: "00N7Q000007qqu3",
  },
};

// Funzione per ottenere la mappatura corrente in base all'ambiente
export function getSalesforceFieldMapping(): SalesforceFieldMapping {
  const environment = process.env.NODE_ENV || 'development';
  
  // Se siamo in produzione, usa la configurazione di produzione
  if (environment === 'production') {
    return fieldMappings.production;
  }
  
  // Default: development
  return fieldMappings.development;
}

// Funzione per mappare i dati del form ai campi Salesforce
export function mapFormDataToSalesforce(formData: Record<string, string>): Record<string, string> {
  const mapping = getSalesforceFieldMapping();
  
  return {
    [mapping.applicant]: formData.applicant,
    [mapping.address]: formData.address,
    [mapping.phone]: formData.phone,
    [mapping.subject]: formData.subject,
    [mapping.object]: formData.object,
    [mapping.description]: formData.description,
    [mapping.notice]: formData.notice,
  };
}