git config --global user.name [configurar o seu nome no git globlamente no seu pc]

=> ! para ser só no seu user é só tirar o --global !

git config --global user.email [mesma coisa que o anterior, mas para o email]

git init [Iniciar o Versionamento de codigo na pasta do projeto];

=> Stage: agrupamento de arquivos que vão para o versionamento;

git status [Ver status do projeto. Se tem alterações não inseridas no Stage];

git add "nome do projeto.extensao" [adicionar um arquivo ao controle de Versionamento];

git add . [adicionar todos os projetos da pasta para o controle de versionamento];

git add -A [adiciona no stage só os arquivos que ainda não estão la]

git add *.extesão [adiciona ao versionamento todos os arquivos que tem a mesma extensão inserida]

git commit -m "Mensagem do Commit" [Cria uma versão do codigo atual do projeto, apenas nos arquivos que foram adicionados no stage];

git commit -a -m "mensagem" [adiciona o ultimo modificado no stage e commita]

git log [ve os commits ja feitos]

!para exibir um numero especifico bata colocar -numero
ex.: git log -4 : mostrará os 4 ultimos !

git retore "nome do arquivo" [volta para o arquivo atual para a que está no stage]

git diff [compara a versão do codigo dos arquivos que vc ta escrevendo com as do stage]

git diff "nome do arquivo" [mesma coisa, mas com um arquivo em especifico]

git reset "nome do arquivo" [tira um arquivo do stage]

git remote add origin; 
ere

git push [enviar para o repositorio remoto];

git reflog [mostra as versoes do codigo];

git reset --hard codigo da versão [permite voltar para uma versão do codigo, é necessario por o codigo da versao que aparece quando vc poe git reflog];

git branch [mostra quantas branchs tem no projeto];

git branch nome da branch [cria uma branch nomeada];

git branch -m "novo nome" [muda o nome da branch]

git checkout nome da branch [seleciona a branch que vc deseja];

git checkout -b nome da branch [cria uma branch na seleciona];

                                            ||||||||
                                            vvvvvvvv

**Sempre que for criada uma nova branch e for realizado um commit será necessario executar um codigo que o bash solicitar** 

git merge nome da branch que será puxada as alterações [pega as alteracoes da branch do nome colocado para branch atual] => (**para isso deve estar selecionada a branch que vai receber as alteracoes**);

git pull [Trás as atualizacoes do codigo mais atual do servidor para o versionamento local];


# Passos padroes de trabalho com versionamento:

    1. git pull da branch main/principal
    2. gerar uma nova branch a partir da branch principal 
    3. Trabalhar e adicionar novas funcionalidades na nova branch que criou
    4. Finalizar trabalho na branch temporaria
    5. git checkout na branch main/principal
    6. git pull
    7. mergiar(unir) o codigo da branch temporaria com a branch principal(depois de testar)
    8. git push da branch principal

pull request [solicitacão de atualização]; (aprofundar mais dps!)

gitignore [os arquivos selecionados no gitignore serão ignorada
(não vão para o projeto final/ escondidos)];

touch .gitignore [cria um arquivo gitignore];

(Dentro do gitignore deve se por o caminho até o arquivo ignorado)


teste