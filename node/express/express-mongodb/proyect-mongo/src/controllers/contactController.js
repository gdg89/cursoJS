exports.contactPage = (request, response) =>{
    response.send(`
    <form action="/contact" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
  <button type="submit" >Mandala Toda!</button>
</form>

    `);
}

exports.contactResposta = (request, response) =>{
    response.send('Formulario enviado divino');
}