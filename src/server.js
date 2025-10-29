import express from 'express';
import bodyParser from 'body-parser';
import AWS from 'aws-sdk';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

AWS.config.update({
  region: 'us-east-1', 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const params = {
    Destination: {
      ToAddresses: ['zrussogonzalez@gmail.com'],
    },
    Message: {
      Body: {
        Text: { Data: `From: ${name} <${email}>\n\n${message}` },
      },
      Subject: { Data: `Website Contact: ${name}` },
    },
    Source: 'zrussogonzalez@gmail.com',
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
