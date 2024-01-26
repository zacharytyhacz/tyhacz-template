# Lowry Construction and Mechanical

# Development Run

```bash
npm install

npm run dev-client
npm run dev-server
```

# Production

```bash
npm install

npm build

# Proxy server the server-prod folder as running node app.
```

# API Document

# Contact
```
{
    name: 'string',
    officePhone: 'string',
    mobilePhone: 'string',
    email: 'string'
}
```

# Customer
- A customer is a company/business/place

```
{
    name: 'string',
    street: 'string',
    state: 'string',
    zip: 'string'
}
```


# Customer Contacts

- A customer can have many contacts like the owner, a family member, manager, contractor, etc

```
{
    contact: 'string id to contact',
    title: 'family member' | 'owner' | 'project manager' | 'property manager' | 'superintendent' | 'contractor' | 'other',
}
```


# Project

- A project is owned by a customer

```
{
    customerOwner: 'string id to customer',
    name: 'string name of project',
    description: 'string text area',

    classification: 'Electrical' | 'General Construction' | 'HVAC' | 'Plumbing',

    street: 'string',
    state: 'string',
    zip: 'string',

    workLocationBuilding: 'string',
    workLocationBuildingNumber: 'string',
    workLocationRoomName: 'string',
    workLocationRoomNumber: 'string',
    workLocationFacilityGroup: 'string',

    permitDate: Date,
    permitNumber: 'string',

}
```

# Project Contact

- A project has many contacts that could be architects, engineers, managers, vendors, etc

```
{
    project: 'string id to project',
    contact: 'string id to contact',
    title: 'Architect' | 'Engineer' | 'General Contractor' | 'Inspection Department' | 'Vendor' | 'Other',
}
```

# Project Document

- A project can have many documents for any paper work related to the project
- A name to give the document a more human friendly idea of what the document is about
- A date if the date of document is relavant


```
{
    project: 'string id to project',
    name: 'string name of this document',
    url: 'string url',
    date: Date
}
```

# Project Equipment

- A project can have many equipment objects related to the job

```
{
    project: 'string id to project',

    id: 'string',
    type: 'Air Handler' | 'Package System' | 'Condenser',
    manufacturer: 'string',
    model: 'string',
    size: 'string',
    serial: 'string',
    installDate: Date
}
```

# Project Warranty

- A project can have many warranties for equipment, labor, or something else

```
{
    project: 'string id to project',
    company: 'string company name',
    type: 'parts' | 'labor',
    confirmationNumber: 'string',
    expirationDate: Date
}
```



