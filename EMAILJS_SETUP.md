# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality for your contact form.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from your frontend JavaScript code without needing a backend server. It's perfect for static websites like this portfolio.

## Step-by-Step Setup

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add an Email Service

1. Log in to your EmailJS dashboard: [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the instructions to connect your email account
6. **Copy the Service ID** (it will look like `service_xxxxx`)

### Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Choose a template or start from scratch
4. The "Contact Us" template is already set up with these variables:
   - `{{name}}` - Sender's name (required)
   - `{{message}}` - Message content (required)
   - `{{time}}` - Timestamp (optional, automatically added)

   **Your Template HTML:**
   ```html
   <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
     <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
     <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
       <table role="presentation">
         <tr>
           <td style="vertical-align: top">
             <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">👤</div>
           </td>
           <td style="vertical-align: top">
             <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
             <div style="color: #cccccc; font-size: 13px">{{time}}</div>
             <p style="font-size: 16px">{{message}}</p>
           </td>
         </tr>
       </table>
     </div>
   </div>
   ```
   
   **Note:** The code is already configured to send `name` and `message` variables that match this template!

5. Set the **To Email** field to your email address (e.g., `pooja.rawool@gmail.com`)
6. Set the **From Name** to something like "Portfolio Contact Form"
7. Click **Save**
8. **Copy the Template ID** (it will look like `template_xxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find your **Public Key** (it will look like `xxxxxxxxxxxxx`)
3. Copy it

### Step 5: Configure Your Website

1. Open `js/config.js` in your project
2. Find the `contact.emailjs` section (around line 70)
3. Fill in the three values you copied:

```javascript
emailjs: {
    serviceId: 'service_xxxxx',      // Your Service ID from Step 2
    templateId: 'template_xxxxx',    // Your Template ID from Step 3
    publicKey: 'xxxxxxxxxxxxx'       // Your Public Key from Step 4
}
```

### Step 6: Test Your Setup

1. Open your website in a browser
2. Navigate to the Contact section
3. Fill out the contact form
4. Submit the form
5. Check your email inbox for the message

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Email delivery tracking

This should be sufficient for a portfolio website. If you need more, you can upgrade to a paid plan.

## Troubleshooting

### Emails Not Sending

1. **Check Browser Console**: Open browser developer tools (F12) and check for any error messages
2. **Verify Configuration**: Make sure all three values (serviceId, templateId, publicKey) are correctly entered in `config.js`
3. **Check EmailJS Dashboard**: Log in to your EmailJS dashboard and check the "Logs" section to see if emails are being sent
4. **Verify Template Variables**: Make sure your template uses the exact variable names listed above

### Common Errors

- **"EmailJS SDK is not loaded"**: Make sure the EmailJS script is included in `index.html` (it should be there already)
- **"EmailJS is not configured"**: Check that all three configuration values are filled in `config.js`
- **"Failed to send email"**: Check your EmailJS dashboard logs for more details

## Security Notes

- The Public Key is safe to expose in your frontend code
- Never share your Private Key (you won't need it for this setup)
- EmailJS handles email delivery securely through their servers

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their dashboard for support options

## Alternative: Using mailto Links

If you prefer not to use EmailJS, you can modify the form to use `mailto:` links instead. However, this requires users to have an email client configured and is less user-friendly.
