        window.onload = function() {
            const senhaCorreta = "123";
            let senha = prompt("Por favor, digite a senha para acessar a página:");

            if (senha !== senhaCorreta) {
                alert("Senha incorreta. Acesso negado.");
                window.location.href = "primario.html";
            } 
            else
                alert("Bem-vindo.");
            
        }