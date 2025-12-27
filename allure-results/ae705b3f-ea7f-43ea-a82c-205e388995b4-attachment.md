# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e7]:
        - img [ref=e8]
        - generic [ref=e9]: Salesforce
      - generic [ref=e11]:
        - generic [ref=e12]:
          - generic [ref=e13]:
            - text: Username
            - textbox "Username" [active] [ref=e15]
          - text: Password
          - textbox "Password" [ref=e16]
          - button "Log In" [ref=e17] [cursor=pointer]
          - generic [ref=e18]:
            - checkbox "Remember me" [ref=e19]
            - generic [ref=e20]: Remember me
        - generic [ref=e21]:
          - link "Forgot Your Password?" [ref=e22] [cursor=pointer]:
            - /url: /secur/forgotpassword.jsp?locale=us
          - link "Use Custom Domain" [ref=e23] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=e24]: or
        - link "Log In with Email" [ref=e25] [cursor=pointer]:
          - /url: https://welcome.salesforce.com?ref=lsc
      - generic [ref=e26]:
        - paragraph [ref=e27]: Not a customer?
        - link "Try for Free" [ref=e28] [cursor=pointer]:
          - /url: https://www.salesforce.com/form/trial/freetrial.jsp?d=70130000000Enus
    - generic [ref=e29]:
      - text: © 2025 Salesforce, Inc. All rights reserved. |
      - link "Privacy" [ref=e30] [cursor=pointer]:
        - /url: https://www.salesforce.com/us/company/privacy
  - iframe [ref=e32]:
    - generic [active]:
      - main
  - generic: Login
  - iframe [ref=e33]:
    
```