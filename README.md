<h1>A simple CRUD app using SpringBoot and React.</h1>

This application was made by following this tutorial: https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot

<h3>Run Instructions</h3>

You must first have <strong>Java 8, Node.js 8 </strong> (or higher) and <strong>Yarn</strong> (or npm) installed.

Once you have cloned the project onto your machine, you can then start the server (as well as download all dependencies needed
to run the application) by running:

```bash
./mvnw spring-boot:run
```

Then, start the client and download all frontend dependencies by doing:
```bash
yarn && yarn start
```

Because this application uses Okta's Identity and Access Management platform (specifically Okta's OIDC API), you must first create an 
Okta Developer account and then log in. 

Once you have logged in, navigate to **Applications**, then to **Add Application**. Click **Web**, then **Next**, and enter an application of
your choosing a name. Specify `http://localhost:8080/login/oauth2/code/okta` to act as a Login redirect URI. Click **Done**, then click **Edit** 
to edit General Settings. Add `http://localhost:3000` and `http://localhost:8080` as the Logout redirect URIs, then click **Save**. 
                         
<h4>Server Configuration</h4>
 
 Set the `issuer` and copy the `clientId` and `clientSecret` into the `src/main/resources/application.yml` file of the application. 
  
<strong>Note:</strong> The value of `{yourOktaDomain}` should look something like `dev-123456.oktapreview.com`. Do not include the `-admin` as 
 it appears in your browser URL.
 
Therefore, your `applications.yml` should look like this:
```yaml
spring:
profiles:
 active: @spring.profiles.active@
security:
 oauth2:
   client:
     registration:
       okta:
         client-id: {clientId}
         client-secret: {clientSecret}
         scope: openid email profile
     provider:
       okta:
         issuer-uri: https://{yourOktaDomain}/oauth2/default
```

Once you have followed the above steps, you should be able to run the application locally using your own Okta account's authentication.