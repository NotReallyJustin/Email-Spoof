# Email-Spoof
Funny little email "spoofing" code that exploits Steven's IMAP and SSO. <br />
The TLDR is that Stevens' Outlook tries implementing its own SSO, which "overwrites" Microsoft Outlook's email authentication/filter. <br />
<br />
So as long as we don't send emails through SMTP and trigger things like DKIM, we can send fake stevens.edu emails <br />
This is an 4/1 joke for people in the Stevens Cyber Defense Team (Cheese if you're reading this I'm sorry lol)

# Obligatory Note
This code is intended to be used as an 4/1 joke - please don't actually phish/spam people with this. <br />
Well... I can't really stop you actually. This isn't some fancy exploit. I'm just sending an email like normal