function buscaConteudo(conteudo){
		if(conteudo == "Sobre"){
		document.querySelector(".main").innerHTML = `<h2>Sobre mim</h2>
    <h5>José Eduardo Santos Silva - 18 anos, Dez 18, 2021</h5>
    <!--<div class="fakeimg" style="height:200px;">Image</div>-->
    <h5>Residente:</h5>
    <p>Granja, Ceará</p>
    <h5>Caracteristicas pessoais:</h5>
    <p>Sou um estudante de Engenharia da computação,não trabalho, busco minha primeira oportunidade de colocar em prática meus conhecimentos visando melhorar o meu desenvolvimento profissional, não tenho muita experiêcia entretanto sou focado, dedicado e busco sempre aumentar meu leque de Habilidades buscando sempre um resultado melhor.</p>
    <br>
    <!--<h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    -->`;
    		}
	if(conteudo == "Manual"){
		document.querySelector(".main").innerHTML = `<h2>Manual</h2>
			<a href="https://drive.google.com/drive/folders/1tUgK2zIYZhzPbZ8mQeTbnjjHWXxxSrwv?usp=sharing">Manual</a>
		`;
    		}
        if(conteudo == "Habilidades"){
        	document.querySelector(".main").innerHTML = `<h2>Habilidades e Competências</h2>
    <h5>José Eduardo Santos Silva - 18 anos, Dez 18, 2021</h5>
    <h4>Cursos:</h4>
    <p>
    	<ul>
    		<li><b>Java básico e MVC </b><br> E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho</li>
    		<li><b>Conceitos de Scrum e metódologias ágeis </b><br> E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho</li>
    		<li><b>Terminal Linux </b><br> Udemy</li>
    		<li><b>Mysql </b><br> E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho, Udemy</li>
    		<li><b>manutenção de computadores </b><br> E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho</li>
    		<li><b>Básico de html,css e javascript </b><br> E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho, Curso em vídeo</li>
    		<li><b>Inglês técnico nivel B1(Pelo teste da EF SET) </b><br> E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho</li>
    	</ul>
    </p>`;
        }
        if(conteudo == "Educação"){
        	document.querySelector(".main").innerHTML = `<h2>Formações e Histórico escolar</h2>
    <h5>José Eduardo Santos Silva - 18 anos, Dez 18, 2021</h5>
    <p><b>Ensino superior:</b></p>
    <p>Universidade do Federal do Ceará 08/2021 - atualmente(Cursando 2º Periodo)</p>
    <p><b>Ensino médio:</b></p>
    <p>E.E.E.P Professor Emmanuel Oliveira de Arruda Coelho 01/2018 - 03/2021</p>
    `;
        }
        if(conteudo == "Perfil"){
        	document.querySelector(".main").innerHTML = `<h2>Perfil Profissional e Gostos</h2>
    <h5>José Eduardo Santos Silva - 18 anos, Dez 18, 2021</h5>
    <h5>Gostos:</h5>
    <p>Eu gosto de programação, considero um hobby infelizmente não fiz upload de todos os projetos que já fiz no meu github e acabei os perdendo.Gosto de jogos de videogame acompanho todos os anos os eventos Game of the year,Gaming Expo e Comic coon Experience.Assisto algumas séries e animes por mês.</p>
    <br>
    <h5>Perfil:</h5>
    <p>Eu busco me tornar um programador full stack focado em Java,javascript e Mysql.Infelizmente não sou tão bom em matemática aprendo a mesma quando me é necessário entretanto no que diz respeito a lógica eu me considero bom, com muito o que aprender claro mas não como um completo iniciante, a respeito de soft skills sou bom em trabalho em equipe, me comunico da maneira mais direta e objetiva possivel por fim tenho certa flexibilidade e adaptabilidade as circunstâncias(principalmente em ambientes extressantes).</p>`;
        }
	}
