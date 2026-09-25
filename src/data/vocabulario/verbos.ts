/**
 * Verbos que cambian según el tiempo: forma base (presente), pasado y participio,
 * con una aproximación de cómo se pronuncian escrita "a la española"
 * (j = h suave, th = lengua entre los dientes, u = w, sh, ch, y = j inglesa; la tilde marca la sílaba fuerte).
 *
 * Irregulares: "base|pasado|participio|español|aprox|aproxPasado|aproxParticipio"
 *   - Si falta aproxPasado se usa la de la base; si falta aproxParticipio, la del pasado.
 * Regulares:   "base|aprox|español|pasado|aproxPasado" (los dos últimos son opcionales)
 *   - pasado: solo cuando se duplica la consonante (stop → stopped).
 *   - aproxPasado: solo cuando la regla automática de -ed no acierta.
 * Las demás formas (3ª persona, -ing) se calculan en lib/verbos.ts.
 */

export const IRREGULARES_RAW = `
arise|arose|arisen|surgir|aráis|aróus|arísen
awake|awoke|awoken|despertar(se)|auéik|auóuk|auóuken
babysit|babysat|babysat|cuidar niños|béibisit|béibisat
be|was / were|been|ser / estar|bi|uás, uér|bin
bear|bore|borne|soportar / cargar|ber|bor|born
beat|beat|beaten|vencer / golpear|bit|bit|bíten
become|became|become|convertirse en / volverse|bikám|bikéim|bikám
begin|began|begun|empezar|biguín|bigán|bigón
bend|bent|bent|doblar|bend|bent
bet|bet|bet|apostar|bet
bind|bound|bound|atar|báind|báund
bite|bit|bitten|morder|báit|bit|bíten
bleed|bled|bled|sangrar|blid|bled
blow|blew|blown|soplar|blóu|blu|blóun
break|broke|broken|romper|bréik|bróuk|bróuken
breed|bred|bred|criar|brid|bred
bring|brought|brought|traer|bring|brot
broadcast|broadcast|broadcast|transmitir|bródkast
build|built|built|construir|bild|bilt
burn|burned / burnt|burned / burnt|quemar|bern|bernd, bernt
burst|burst|burst|reventar|berst
buy|bought|bought|comprar|bái|bot
cast|cast|cast|lanzar / elegir (actores)|kast
catch|caught|caught|atrapar|kach|kot
choose|chose|chosen|elegir|chus|chóus|chóusen
cling|clung|clung|aferrarse|kling|klang
come|came|come|venir|kam|kéim|kam
cost|cost|cost|costar|kost
creep|crept|crept|arrastrarse|krip|krept
cut|cut|cut|cortar|kat
deal|dealt|dealt|tratar / repartir|dil|delt
dig|dug|dug|cavar|dig|dag
dive|dove / dived|dived|bucear / clavarse|dáiv|dóuv, dáivd|dáivd
do|did|done|hacer|du|did|dan
draw|drew|drawn|dibujar|dro|dru|dron
dream|dreamed / dreamt|dreamed / dreamt|soñar|drim|drimd, dremt
drink|drank|drunk|beber / tomar|drink|drank|dronk
drive|drove|driven|manejar|dráiv|dróuv|dríven
eat|ate|eaten|comer|it|éit|íten
fall|fell|fallen|caer(se)|fol|fel|fólen
feed|fed|fed|alimentar / dar de comer|fid|fed
feel|felt|felt|sentir(se)|fil|felt
fight|fought|fought|pelear|fáit|fot
find|found|found|encontrar|fáind|fáund
fit|fit|fit|quedar (ropa) / caber|fit
flee|fled|fled|huir|fli|fled
fling|flung|flung|arrojar|fling|flang
fly|flew|flown|volar|flái|flu|flóun
forbid|forbade|forbidden|prohibir|forbíd|forbád|forbíden
forecast|forecast|forecast|pronosticar|fórkast
foresee|foresaw|foreseen|prever|forsí|forsó|forsín
forget|forgot|forgotten|olvidar|forguét|forgát|forgáten
forgive|forgave|forgiven|perdonar|forguív|forguéiv|forguíven
freeze|froze|frozen|congelar(se)|fris|fróus|fróusen
get|got|gotten|obtener / conseguir / llegar|guet|gat|gáten
give|gave|given|dar|guiv|guéiv|guíven
go|went|gone|ir|góu|uént|gon
grind|ground|ground|moler|gráind|gráund
grow|grew|grown|crecer / cultivar|gróu|gru|gróun
hang|hung|hung|colgar|jang|jong
have|had|had|tener / haber|jav|jad
hear|heard|heard|oír|jir|jerd
hide|hid|hidden|esconder(se)|jáid|jid|jíden
hit|hit|hit|golpear|jit
hold|held|held|sostener / agarrar|jóuld|jeld
hurt|hurt|hurt|lastimar / doler|jert
keep|kept|kept|mantener / guardar|kip|kept
kneel|knelt|knelt|arrodillarse|nil|nelt
know|knew|known|saber / conocer|nóu|nu|nóun
lay|laid|laid|poner / colocar|léi|léid
lead|led|led|guiar / dirigir|lid|led
leap|leapt / leaped|leapt / leaped|saltar|lip|lept, lipt
leave|left|left|irse / dejar|liv|left
lend|lent|lent|prestar|lend|lent
let|let|let|dejar / permitir|let
lie|lay|lain|acostarse / estar tendido|lái|léi|léin
light|lit|lit|encender / prender|láit|lit
lose|lost|lost|perder|lus|lost
make|made|made|hacer / fabricar|méik|méid
mean|meant|meant|significar / querer decir|min|ment
meet|met|met|conocer / reunirse con|mit|met
mislead|misled|misled|engañar / confundir|mislíd|misléd
mistake|mistook|mistaken|confundir|mistéik|mistúk|mistéiken
misunderstand|misunderstood|misunderstood|malentender|misanderstánd|misanderstúd
overcome|overcame|overcome|superar|ouverkám|ouverkéim|ouverkám
overhear|overheard|overheard|escuchar por casualidad|ouverjír|ouverjérd
oversleep|overslept|overslept|quedarse dormido|ouverslíp|ouverslépt
overtake|overtook|overtaken|adelantar (a otro auto)|ouvertéik|ouvertúk|ouvertéiken
overthink|overthought|overthought|pensar de más|ouverthínk|ouverthót
pay|paid|paid|pagar|péi|péid
prove|proved|proven|demostrar|pruv|pruvd|prúven
put|put|put|poner|put
quit|quit|quit|renunciar / dejar (un hábito)|kuít
read|read|read|leer|rid|red
rebuild|rebuilt|rebuilt|reconstruir|ribíld|ribílt
ride|rode|ridden|andar en (bici, caballo)|ráid|róud|ríden
ring|rang|rung|sonar / tocar (timbre)|ring|rang|rong
rise|rose|risen|subir / elevarse|ráis|róus|rísen
run|ran|run|correr|ran|ran|ran
say|said|said|decir|séi|sed
see|saw|seen|ver|si|so|sin
seek|sought|sought|buscar|sik|sot
sell|sold|sold|vender|sel|sóuld
send|sent|sent|enviar / mandar|send|sent
set|set|set|poner / establecer|set
sew|sewed|sewn|coser|sóu|sóud|sóun
shake|shook|shaken|sacudir / agitar|shéik|shuk|shéiken
shed|shed|shed|mudar / soltar|shed
shine|shone|shone|brillar|sháin|shóun
shoot|shot|shot|disparar|shut|shat
show|showed|shown|mostrar / enseñar|shóu|shóud|shóun
shrink|shrank|shrunk|encoger(se)|shrink|shrank|shronk
shut|shut|shut|cerrar|shat
sing|sang|sung|cantar|sing|sang|song
sink|sank|sunk|hundir(se)|sink|sank|sonk
sit|sat|sat|sentarse|sit|sat
sleep|slept|slept|dormir|slip|slept
slide|slid|slid|deslizar(se)|sláid|slid
sneak|snuck|snuck|escabullirse|snik|snak
speak|spoke|spoken|hablar|spik|spóuk|spóuken
speed|sped|sped|ir a toda velocidad|spid|sped
spend|spent|spent|gastar / pasar (tiempo)|spend|spent
spin|spun|spun|girar|spin|span
spit|spit / spat|spit / spat|escupir|spit|spit, spat
split|split|split|dividir / partir|split
spread|spread|spread|untar / extender|spred
spring|sprang|sprung|saltar / brotar|spring|sprang|sprong
stand|stood|stood|estar de pie / aguantar|stand|stud
steal|stole|stolen|robar|stil|stóul|stóulen
stick|stuck|stuck|pegar / atorarse|stik|stak
sting|stung|stung|picar (insecto)|sting|stang
stink|stank|stunk|apestar|stink|stank|stonk
strike|struck|struck|golpear / hacer huelga|stráik|strak
strive|strove|striven|esforzarse|stráiv|stróuv|stríven
swear|swore|sworn|jurar / decir groserías|suér|suór|suórn
sweep|swept|swept|barrer|suíp|suépt
swim|swam|swum|nadar|suím|suám|suóm
swing|swung|swung|columpiarse / balancear|suíng|suáng
take|took|taken|tomar / llevar|téik|tuk|téiken
teach|taught|taught|enseñar|tich|tot
tear|tore|torn|romper / rasgar|ter|tor|torn
tell|told|told|decir / contar|tel|tóuld
think|thought|thought|pensar|think|thot
throw|threw|thrown|lanzar / tirar|thróu|thru|thróun
undergo|underwent|undergone|someterse a / pasar por|andergóu|anderuént|andergón
understand|understood|understood|entender|anderstánd|anderstúd
undo|undid|undone|deshacer|andú|andíd|andán
upset|upset|upset|molestar / alterar|apsét
wake|woke|woken|despertar(se)|uéik|uóuk|uóuken
wear|wore|worn|usar / llevar puesto|uér|uór|uórn
weave|wove|woven|tejer|uív|uóuv|uóuven
weep|wept|wept|llorar|uíp|uépt
win|won|won|ganar|uín|uán
wind|wound|wound|enrollar / dar cuerda|uáind|uáund
withdraw|withdrew|withdrawn|retirar (dinero)|uithdró|uithdrú|uithdrón
withstand|withstood|withstood|resistir|uithstánd|uithstúd
write|wrote|written|escribir|ráit|róut|ríten
`;

export const REGULARES_RAW = `
accept|aksépt|aceptar
add|ad|agregar / sumar
admit|admít|admitir|admitted
agree|agrí|estar de acuerdo
allow|aláu|permitir
answer|ánser|contestar
appear|apír|aparecer
arrive|aráiv|llegar
ask|ask|preguntar / pedir
beg|beg|rogar|begged
believe|bilív|creer
borrow|bárou|pedir prestado
brush|brash|cepillar(se)
call|kol|llamar
carry|kéri|cargar / llevar
change|chéinch|cambiar||chéinchd
chat|chat|conversar / chatear|chatted
check|chek|revisar
clean|klin|limpiar
close|klóus|cerrar||klóusd
collect|kolékt|juntar / coleccionar
complain|kompléin|quejarse
cook|kuk|cocinar
count|káunt|contar (números)
cry|krái|llorar
dance|dans|bailar
decide|disáid|decidir
deliver|dilíver|entregar
depend|dipénd|depender
describe|diskráib|describir
destroy|distrói|destruir
die|dái|morir
disappear|disapír|desaparecer
discover|diskáver|descubrir
dress|dres|vestir(se)
drop|drap|dejar caer / tirar|dropped
enjoy|enyói|disfrutar
enter|énter|entrar
explain|ekspléin|explicar
fail|féil|fallar / desaprobar
fill|fil|llenar
finish|fínish|terminar
fix|fiks|arreglar
follow|fálou|seguir
guess|gues|adivinar
happen|jápen|pasar / suceder
hate|jéit|odiar
help|jelp|ayudar
hope|jóup|esperar (desear)
hug|jag|abrazar|hugged
hurry|jéri|apurarse
imagine|imáyin|imaginar
improve|imprúv|mejorar
invite|inváit|invitar
join|yóin|unirse
jump|yamp|saltar
kiss|kis|besar
laugh|laf|reír(se)
learn|lern|aprender
like|láik|gustar
listen|lísen|escuchar
live|liv|vivir
look|luk|mirar / verse
love|lav|amar / encantar
marry|méri|casarse con
miss|mis|extrañar / perder (el bus)
move|muv|mover(se) / mudarse
need|nid|necesitar
offer|ófer|ofrecer
open|óupen|abrir
order|órder|pedir (comida) / ordenar
own|óun|ser dueño de
paint|péint|pintar
pass|pas|pasar / aprobar
pick|pik|escoger / recoger
plan|plan|planear|planned
play|pléi|jugar / tocar (instrumento)
practice|práktis|practicar
prefer|prifér|preferir|preferred
prepare|pripér|preparar
pretend|priténd|fingir
promise|prámis|prometer
pull|pul|jalar
push|push|empujar
rain|réin|llover
reach|rich|alcanzar
receive|risív|recibir
regret|rigrét|arrepentirse|regretted
relax|riláks|relajarse
remember|rimémber|recordar
rent|rent|alquilar
repeat|ripít|repetir
rest|rest|descansar
return|ritérn|regresar / devolver
rob|rab|robar (a alguien)|robbed
save|séiv|ahorrar / guardar
share|sher|compartir
shop|shap|ir de compras|shopped
smile|smáil|sonreír
smoke|smóuk|fumar
start|start|empezar
stay|stéi|quedarse
stop|stap|detener(se) / dejar de|stopped
study|stádi|estudiar
suggest|sagyést|sugerir
talk|tok|hablar / conversar
taste|téist|probar (sabor) / saber a
text|tekst|enviar un mensaje
thank|thank|agradecer
touch|tach|tocar
travel|trável|viajar
try|trái|intentar / probar
turn|tern|girar / voltear
use|yus|usar||yusd
visit|vísit|visitar
wait|uéit|esperar
walk|uók|caminar
want|uánt|querer
wash|uásh|lavar
watch|uách|ver / mirar
wish|uísh|desear
work|uérk|trabajar / funcionar
worry|uéri|preocuparse
`;
