import { colors } from './../styles/baseStyles';

export const htmlTemplate = (receiverFName, senderFName, description) => (`
<html>
  <body>
    <table>
      <tr>
        <td align="center">
          <img src="http://i.imgur.com/ViE7nOs.png">
          </img>
        </td>
      </tr>
      <tr>
        <td align="left">
          <p>Hey <b>${receiverFName},</b></p>
          <p>Your friend <b>${senderFName}</b> has invited you to a <u style='color: orange'>POTLUCKY</u> event! Let your friend know you are coming</p>
          <p>by <u style='color: orange'>downloading</u> the app for free.</p>
          <br/>
          <p>Here is your invite </p>
        </td>
      </tr>
      <table style="width:600px; border:1px dashed orange; border-bottom: 0px; margin: 50px; margin-bottom: 0px;">      
        <tr>      
            <img src="http://i.imgur.com/ViE7nOs.png"> 
          </td>
        </tr>
        <tr>
          <td style="padding-right: 50px; padding-left: 50px; background-color: #f5f2f0;">
            <p>Date: 3 April 2017 </p>
            <p>Start Time: 4:20pm </p>
            <p>Serving Time: 4:20pm </p>        
            <p>Location: Mexico </p>
            <br/> 
            <p><b> Event info: </b></p>
            <p>${description} </p>     
          </td>
        </tr>
      </table>
      <table style="margin: 50px; margin-top: 0px;">
        <tr>
          <td align="center" style='margin: 50px; margin-top: 0px;background-color: ${colors.primaryBtnColor};width: 600px;'>
            <p style='color: white'>Don't forget to download the app for <b>free</b></p> 
            <p style='color: white'>and let them know you're coming.</p>
          </td>
        </tr>
      </table>      
    </table>
  </body>
</html>
`);
