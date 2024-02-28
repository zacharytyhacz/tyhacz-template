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

# User
```
{
    name: 'string',
    phone: 'string',
    type: 'instructor' | 'student',
}
```

# Classes
```
{
    owner: 'userId', // of instructor
    name: 'name of class'
}
```