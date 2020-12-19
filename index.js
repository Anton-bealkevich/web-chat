 function strip(html)
          {
              var tmp = document.createElement("DIV");
              tmp.innerHTML = html;
              return tmp.textContent || tmp.innerText || "";
          }

          // Отправляет сообщение в чат
          function web_send_msg()
          {
              // Получение значений из элементов ввода.
              var text = $("#WebChatTextID").val(); // Получаем текст сообщения
              var name = $("#WebChatNameID").val(); // Получаем имя пользователя

              // Очистка поля с текстом сообщения
              $("#WebChatTextID").val("");

              // Добавление отправленного сообщения к списку сообщений.
              $("#WebChatFormForm").append("<p><b>"+strip(name)+": </b>"+text+"</p>");

          }

 /*function qwe(){
 var tim=new Date();
 document.write('Текущие время'+tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds());
 }*/

