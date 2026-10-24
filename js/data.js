/* =============================================================================
 *  DADOS DO QUIZ - 10 MÓDULOS DE HARDWARE
 * -----------------------------------------------------------------------------
 *  Estrutura de cada módulo:
 *    id           identificador interno (usado no registro de concluídos)
 *    name         nome exibido
 *    icon         ícone Font Awesome (usado como fallback caso a foto falhe)
 *    color        cor de destaque do módulo
 *    image        foto real (caminho montado a partir de CONFIG.paths.images)
 *    imageAlt    descrição da foto (acessibilidade)
 *    imageCredit  autor da foto
 *    imageLicense licença da foto
 *    imagePage   página original da imagem no Wikimedia Commons
 *    desc         descrição curta exibida no card
 *    questions    lista de { q, opts[], ans, exp }
 *
 *  ATENÇÃO: a ordem das questões e a posição das alternativas são sorteadas
 *  em tempo de execução (js/quiz.js → buildShuffledQuestions). O `ans` aqui
 *  é o índice da alternativa correta NO BANCO ORIGINAL — quem embaralha
 *  recalcula o índice para a tela, então o gabarito continua válido.
 *
 *  Para adicionar um módulo novo: copie um bloco, ajuste os campos e o array
 *  cresce automaticamente (o grid e as estatísticas são gerados em tempo real).
 * ============================================================================= */

const MODULES = [
        {
            id: 'cpu',
            name: 'Processador (CPU)',
            icon: 'fa-microchip',
            color: '#00f0ff',
            image: CONFIG.paths.images + 'processador.jpg',
            imageAlt: 'Processador Intel Core i7-12700K (Alder Lake) sobre a placa-mãe',
            imageCredit: 'Eric Gaba (Sting)',
            imageLicense: 'CC BY-SA 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:Intel_CPU_Core_i7_12700K_Alder_Lake_perspective.jpg',
            desc: 'Arquitetura, clocks, núcleos, cache e soquetes.',
            questions: [
                { q: "Qual a função da memória cache L1, L2 e L3 na CPU?", opts: ["Armazenar o SO permanentemente", "Reduzir o tempo de acesso aos dados da RAM", "Controlar a energia recebida da fonte", "Gerar gráficos em 3D"], ans: 1, exp: "A memória cache fica integrada à CPU e armazena dados frequentemente usados para acelerar o processamento em comparação com a RAM." },
                { q: "O que indica a frequência medida em gigahertz (GHz) de um processador?", opts: ["Quantidade de VRAM disponível", "Capacidade total de armazenamento", "Número de ciclos de clock executados por segundo", "A velocidade de rotação da ventoinha"], ans: 2, exp: "GHz indica bilhões de ciclos por segundo. Mais ciclos permitem processar mais instruções no mesmo intervalo de tempo." },
                { q: "Qual é a principal diferença entre os soquetes LGA e PGA?", opts: ["LGA tem pinos na placa-mãe; PGA tem pinos no processador", "LGA é exclusivo para notebooks; PGA para desktops", "PGA suporta mais RAM que LGA", "LGA não exige pasta térmica"], ans: 0, exp: "No LGA (Land Grid Array) os pinos ficam no soquete da placa-mãe. No PGA (Pin Grid Array) os pinos ficam no próprio chip." },
                { q: "O que é a tecnologia Hyper-Threading / SMT?", opts: ["Overclock automático sem esquentar", "Permite que um único núcleo físico execute duas threads (tarefas) virtuais", "Aumenta o tamanho da memória cache", "Junta duas placas de vídeo"], ans: 1, exp: "Hyper-Threading (Intel) ou SMT (AMD) divide um núcleo físico em dois núcleos lógicos para otimizar o uso de recursos ociosos." },
                { q: "Qual o papel do I/O Die em processadores modernos com arquiteturas baseadas em chiplets?", opts: ["Fazer a renderização gráfica básica", "Gerenciar as conexões externas e comunicação entre chiplets de núcleos", "Armazenar a BIOS do computador", "Substituir a necessidade de memória RAM"], ans: 1, exp: "O I/O Die centraliza o controle de memória, PCIe e comunicação interna entre os blocos (chiplets) de núcleos da CPU." },
                { q: "O que significa o termo TDP (Thermal Design Power) de uma CPU?", opts: ["Temperatura máxima suportada antes de queimar", "Quantidade de energia mínima para ligar", "Quantidade máxima de calor expressa em watts que o sistema de refrigeração deve dissipar", "Tensão exata da linha de 12 V"], ans: 2, exp: "O TDP especifica a potência térmica que o cooler precisa dissipar para manter a CPU em temperaturas operacionais seguras." },
                { q: "O que é o fenômeno Thermal Throttling?", opts: ["Aumento de desempenho quando o PC esfria", "Redução automática do clock para diminuir a temperatura e evitar danos", "Desligamento instantâneo da fonte de alimentação", "Aumento da rotação do cooler ao ligar o PC"], ans: 1, exp: "Quando a CPU atinge limites térmicos críticos, ela reduz voluntariamente sua frequência (clock) para consumir menos energia e esfriar." },
                { q: "A arquitetura x86-64 se diferencia da arquitetura ARM principalmente por ser:", opts: ["Baseada em CISC (conjunto de instruções complexas)", "Livre de código aberto", "Exclusiva para dispositivos móveis", "Isenta de uso de registradores"], ans: 0, exp: "x86 usa CISC focado em alto desempenho por instrução, enquanto ARM usa RISC (conjunto reduzido), priorizando eficiência energética." },
                { q: "Qual componente interno da CPU realiza operações matemáticas e lógicas básicas?", opts: ["Controlador de Memória", "Unidade Lógica e Aritmética (ULA/ALU)", "Registrador de Instrução", "Decoder"], ans: 1, exp: "A ULA (Arithmetic Logic Unit) é o coração de cálculo da CPU responsável pelas somas, comparações lógicas e operações binárias." },
                { q: "Para que serve a pasta térmica aplicada entre a CPU e o cooler?", opts: ["Colar o cooler para não soltar", "Preencher as microimperfeições de ar, aumentando a condução térmica", "Conduzir eletricidade entre a CPU e a heatsink", "Isolar a CPU de descargas elétricas"], ans: 1, exp: "O ar é um mau condutor térmico. A pasta preenche as frestas microscópicas de ar entre as superfícies de metal, otimizando a troca de calor." }
            ]
        },
        {
            id: 'mobo',
            name: 'Placa-mãe',
            icon: 'fa-chess-board',
            color: '#7000ff',
            image: CONFIG.paths.images + 'placa-mae.jpg',
            imageAlt: 'Placa-mãe Asus ROG Strix Z690-A Gaming WiFi',
            imageCredit: 'Jacek Halicki',
            imageLicense: 'CC BY-SA 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:2023_P%C5%82yta_g%C5%82%C3%B3wna_Asus_ROG_STRIX_Z690-A_GAMING_WIFI.jpg',
            desc: 'Chipsets, barramentos PCIe, VRM e fatores de forma.',
            questions: [
                { q: "Qual a função do VRM (Módulo Regulador de Tensão) na placa-mãe?", opts: ["Aumentar a velocidade da internet", "Converter a tensão da fonte para níveis baixos e precisos exigidos pela CPU", "Controlar as luzes RGB do gabinete", "Armazenar as fotos do usuário"], ans: 1, exp: "O VRM reduz tensões como 12 V da fonte para cerca de 1,2 V, altamente estáveis, consumidas pelo processador." },
                { q: "Qual destes é o maior fator de forma de placa-mãe usado em desktops?", opts: ["Mini-ITX", "Micro-ATX", "Standard ATX", "E-ATX"], ans: 3, exp: "E-ATX (Extended ATX) é maior que o ATX tradicional, muito utilizado em placas de alto desempenho e servidores." },
                { q: "Para que serve a bateria CR2032 presente na placa-mãe?", opts: ["Ligar o computador em caso de falta de energia", "Alimentar o chip CMOS para manter data, hora e configurações da BIOS", "Dar energia às portas USB traseiras", "Aumentar o FPS dos jogos"], ans: 1, exp: "A pilha mantém o chip CMOS energizado para que as configurações da BIOS e o relógio interno não sejam zerados ao desligar o computador." },
                { q: "O que é o barramento PCIe Express x16 geralmente utilizado para?", opts: ["Conectar placas de som simples", "Placas de vídeo dedicadas de alto desempenho", "Conectar mouses e teclados", "Instalar coolers de gabinete"], ans: 1, exp: "O slot PCIe x16 oferece a maior largura de banda da placa, essencial para a alta transferência de dados das placas de vídeo." },
                { q: "Qual a diferença entre a BIOS Legacy (antiga) e a UEFI (moderna)?", opts: ["UEFI suporta interface gráfica, mouse e discos maiores que 2 TB", "BIOS Legacy é mais rápida para iniciar o sistema", "UEFI só funciona em computadores da Apple", "BIOS não permite alterar a ordem de boot"], ans: 0, exp: "A UEFI substituiu a BIOS antiga trazendo suporte a discos GPT grandes, inicialização segura (Secure Boot) e interface amigável." },
                { q: "O que define as capacidades de expansão, overclock e portas de uma placa-mãe?", opts: ["O tamanho da bateria", "O Chipset (ex: B650, Z790)", "A marca do gabinete", "A quantidade de ventoinhas"], ans: 1, exp: "O chipset é o circuito integrado principal que determina o suporte a recursos como overclock, quantidade de portas USB e pistas PCIe." },
                { q: "Em quais slots de memória RAM deve-se instalar dois pentes para ativar o Dual Channel (em uma placa de 4 slots)?", opts: ["Slots 1 e 2 (lado a lado)", "Slots 1 e 3 (ou 2 e 4, intercalados)", "Apenas nos slots 3 e 4", "Qualquer combinação funciona igual"], ans: 1, exp: "Instalar os pentes em canais separados (geralmente slots A2 e B2 / 2 e 4) ativa a comunicação de 128-bits do Dual Channel." },
                { q: "O que é a tecnologia de painel Clear CMOS?", opts: ["Limpar o pó da placa com ar comprimido", "Resetar as configurações da BIOS/UEFI para os padrões de fábrica", "Formatar o SSD conectado", "Atualizar o Windows automaticamente"], ans: 1, exp: "O Clear CMOS limpa a memória volátil da BIOS, útil para recuperar o sistema caso um overclock mal sucedido impeça a inicialização." },
                { q: "Qual a função do espelho I/O (I/O Shield) traseiro?", opts: ["Apenas decoração estética", "Proteger contra interferência eletromagnética (EMI) e alinhar conectores no gabinete", "Aumentar o fluxo de ar", "Esfriar os conectores USB"], ans: 1, exp: "Além do acabamento, o espelho metálico aterra a placa ao gabinete, prevenindo ruídos de interferência eletromagnética." },
                { q: "Qual é a função do conector de energia de 24 pinos da placa-mãe?", opts: ["Alimentar exclusivamente o cooler líquido", "Fornecer energia principal para a placa-mãe e seus circuitos integrados", "Ligar os LEDs do painel frontal", "Alimentar apenas a placa de vídeo"], ans: 1, exp: "O conector ATX 24-pin é a principal entrada de energia, distribuindo linhas de 3,3 V, 5 V e 12 V para a placa-mãe." }
            ]
        },
        {
            id: 'ram',
            name: 'Memória RAM',
            icon: 'fa-memory',
            color: '#ff007f',
            image: CONFIG.paths.images + 'memoria-ram.jpg',
            imageAlt: 'Dois módulos de memória DDR4 Corsair',
            imageCredit: 'Bretwa',
            imageLicense: 'CC BY-SA 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:2%2A8Go_DDR4_Corsair_-_2018-05-08.jpg',
            desc: 'Frequências, latência CAS, Dual Channel e padrões DDR.',
            questions: [
                { q: "O que significa a sigla RAM?", opts: ["Read Access Memory", "Random Access Memory", "Rapid Allocation Module", "Real-time Auxiliary Memory"], ans: 1, exp: "Random Access Memory (Memória de Acesso Aleatório) permite ler e escrever dados no mesmo tempo, independente da localização do bloco." },
                { q: "Por que a memória RAM é classificada como memória 'volátil'?", opts: ["Porque esquenta muito rápido", "Porque perde todo o seu conteúdo armazenado ao desligar a energia", "Porque pode explodir se houver sobretensão", "Porque muda de frequência sozinha"], ans: 1, exp: "Diferente de SSDs/HDDs, a RAM necessita de corrente elétrica constante para manter os bits retidos em seus capacitores." },
                { q: "Qual a vantagem prática de utilizar o Dual Channel?", opts: ["Dobrar a capacidade de armazenamento do SSD", "Dobrar a largura de banda de comunicação com a CPU (de 64 para 128 bits)", "Reduzir o consumo de energia pela metade", "Evitar vírus no sistema operativo"], ans: 1, exp: "O Dual Channel usa dois canais simultâneos de 64 bits, permitindo que a CPU leia e escreva o dobro de dados ao mesmo tempo." },
                { q: "O que indica a latência CAS (CL) de um pente de RAM?", opts: ["O tempo de atraso entre o comando enviado pela CPU e a entrega dos dados pela RAM", "A quantidade de watts consumida", "A temperatura limite de operação", "A quantidade de LEDs RGB presentes"], ans: 0, exp: "Valores de CL menores indicam que a memória responde mais rapidamente às solicitações de leitura do processador." },
                { q: "Qual a principal evolução da memória DDR5 em relação à DDR4?", opts: ["Uso de conectores USB no lugar de slots", "Frequências significativamente maiores e gerenciador de energia (PMIC) no próprio pente", "Não necessitar de slots na placa-mãe", "Capacidade máxima limitada a 8 GB"], ans: 1, exp: "A DDR5 trouxe arquitetura de 2 subcanais de 32-bit por pente, maior densidade de chips e o PMIC integrado ao módulo." },
                { q: "Para que servem os perfis XMP (Intel) e EXPO (AMD)?", opts: ["Formatarem a memória RAM automaticamente", "Aplicar overclock e configurações de fábrica otimizadas com um clique na BIOS", "Criar um disco rígido virtual na RAM", "Testar se há defeitos nos chips de memória"], ans: 1, exp: "XMP/EXPO são perfis pré-testados pelo fabricante que configuram a frequência máxima nominal e tempos corretos da RAM na BIOS." },
                { q: "Qual a consequência de misturar dois pentes de RAM de frequências diferentes (ex: 2.666 MHz e 3.200 MHz)?", opts: ["O PC não liga de forma alguma", "Ambos funcionarão na velocidade do pente mais lento (2.666 MHz)", "O pente mais rápido queimará", "A frequência média de 2.933 MHz será aplicada"], ans: 1, exp: "Para manter a estabilidade do sistema, o controlador de memória nivela a velocidade de todos os pentes pela menor frequência do grupo." },
                { q: "O que é a memória ECC (Error-Correcting Code)?", opts: ["RAM ultra-rápida usada para jogos em 4K", "RAM capaz de detectar e corrigir corrupção de dados, muito usada em servidores", "RAM barata sem dissipador de calor", "RAM integrada dentro do processador"], ans: 1, exp: "Memórias ECC possuem chips extras para identificar e corrigir erros de bit único causados por interferência ou radiação em ambientes críticos." },
                { q: "O que acontece se um computador esgotar toda a sua memória RAM disponível?", opts: ["O computador desliga imediatamente", "O SO passa a usar o arquivo de paginação no disco (SSD/HDD), deixando o PC lento", "O processador queima por excesso de trabalho", "A tela fica preta para sempre"], ans: 1, exp: "Com a RAM cheia, o sistema operacional usa a 'Memória Virtual' no SSD/HDD. Por ser um disco mais lento que a RAM, ocorrem travamentos." },
                { q: "Qual o formato físico do módulo de memória RAM utilizado em notebooks?", opts: ["DIMM", "SO-DIMM", "Micro-DIMM", "PCIe Card"], ans: 1, exp: "SO-DIMM (Small Outline DIMM) é a versão compacta com cerca de metade do tamanho do módulo DIMM tradicional de desktops." }
            ]
        },
        {
            id: 'storage',
            name: 'Armazenamento',
            icon: 'fa-hard-drive',
            color: '#00ff66',
            image: CONFIG.paths.images + 'armazenamento-ssd.jpg',
            imageAlt: 'SSD Samsung 980 PRO NVMe PCIe 4.0',
            imageCredit: 'D-Kuru',
            imageLicense: 'CC BY-SA 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:Samsung_980_PRO_PCIe_4.0_NVMe_SSD_1TB-top_PNr%C2%B00915.jpg',
            desc: 'SSDs NVMe, SATA, HDDs mecânicos e velocidades de IOPS.',
            questions: [
                { q: "Qual a principal diferença mecânica entre um HDD e um SSD?", opts: ["O HDD usa chips Flash e o SSD usa discos ópticos", "O HDD usa pratos magnéticos giratórios; o SSD usa chips de memória Flash sem partes móveis", "O SSD é mais barulhento que o HDD", "O HDD consome menos energia que o SSD"], ans: 1, exp: "SSDs não possuem partes móveis, tornando-os resistentes a impactos e ordens de grandeza mais rápidos que discos magnéticos (HDDs)." },
                { q: "Qual protocolo permite aos SSDs NVMe atingirem altas velocidades através do barramento PCIe?", opts: ["SATA III", "NVMe (Non-Volatile Memory Express)", "IDE", "SCSI"], ans: 1, exp: "O protocolo NVMe foi desenhado do zero para mídias de estado sólido ultrarrápidas, aproveitando as pistas diretas do barramento PCI Express." },
                { q: "O que mede a métrica IOPS em um dispositivo de armazenamento?", opts: ["Gigabytes transferidos por hora", "Operações de Entrada e Saída Por Segundo (Input/Output Operations Per Second)", "Consumo máximo de watts", "Rotações por minuto do disco"], ans: 1, exp: "IOPS mede a capacidade do SSD de ler e gravar pequenos arquivos aleatórios por segundo, essencial para a fluidez do sistema." },
                { q: "Qual a velocidade média de leitura sequencial de um SSD SATA III comparado a um NVMe PCIe 4.0?", opts: ["SATA ~550 MB/s vs NVMe ~7.000 MB/s", "SATA ~7.000 MB/s vs NVMe ~550 MB/s", "Ambos possuem a mesma velocidade", "SATA ~100 MB/s vs NVMe ~200 MB/s"], ans: 0, exp: "O barramento SATA III é limitado a cerca de 550-600 MB/s, enquanto o PCIe 4.0 x4 ultrapassa 7.000 MB/s nos SSDs NVMe modernos." },
                { q: "O que é o comando TRIM em SSDs?", opts: ["Um overclock para aumentar a velocidade de escrita", "Um comando do SO que informa ao SSD quais blocos de dados não são mais válidos, para que sejam apagados", "Uma ferramenta para desfragmentar o SSD mensalmente", "Um modo de economia de energia"], ans: 1, exp: "O TRIM otimiza a rotina de 'coleta de lixo' do SSD, evitando que a velocidade de escrita caia com o tempo de uso." },
                { q: "Por que NÃO se deve desfragmentar um SSD?", opts: ["Porque ele pode pegar vírus", "Porque não há ganho de desempenho e gera ciclos desnecessários de escrita, desgastando o SSD", "Porque desfragmentar apaga todos os arquivos", "Porque a BIOS proíbe esse comando"], ans: 1, exp: "O acesso em SSDs é elétrico e instantâneo em qualquer bloco. Desfragmentar apenas gasta a vida útil (TBW) das células Flash." },
                { q: "O que indica a especificação TBW (Terabytes Written) de um SSD?", opts: ["A quantidade de armazenamento total disponível", "A estimativa total de terabytes que podem ser gravados no SSD até o fim da garantia", "A velocidade máxima de upload", "O peso do componente em gramas"], ans: 1, exp: "TBW é a métrica de durabilidade que indica o volume acumulado de dados gravados que o SSD suporta com segurança." },
                { q: "Qual tipo de tecnologia de célula armazena 3 bits de dados em cada célula dos SSDs?", opts: ["SLC (Single-Level Cell)", "MLC (Multi-Level Cell)", "TLC (Triple-Level Cell)", "QLC (Quad-Level Cell)"], ans: 2, exp: "TLC (Triple-Level Cell) armazena 3 bits em cada célula, oferecendo um excelente equilíbrio entre custo, capacidade e desempenho." },
                { q: "O formato físico M.2 2280 indica que o SSD possui:", opts: ["22cm de largura e 80cm de comprimento", "22mm de largura e 80mm de comprimento", "22 conexões de pinos e 80 chips de memória", "Suporte a 2280 MB/s de velocidade"], ans: 1, exp: "Nos padrões M.2, os primeiros 2 dígitos são a largura (22 mm) e os dois últimos o comprimento (80 mm)." },
                { q: "Para montar uma matriz RAID 1 (Espelhamento) com 2 discos de 1 TB, qual será a capacidade útil resultante?", opts: ["2 TB", "1 TB", "500 GB", "1,5 TB"], ans: 1, exp: "No RAID 1, os dados são duplicados exatamente iguais nos dois discos para redundância. A capacidade total útil é a de apenas 1 disco (1 TB)." }
            ]
        },
        {
            id: 'gpu',
            name: 'Placa de Vídeo',
            icon: 'fa-display',
            color: '#ffb700',
            image: CONFIG.paths.images + 'placa-video.jpg',
            imageAlt: 'Placa de vídeo MSI GeForce RTX 3070 Ventus 3X OC',
            imageCredit: 'TheStriker',
            imageLicense: 'CC BY 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:MSI_GeForce_RTX_3070_VENTUS_3X_OC.jpg',
            desc: 'VRAM, núcleos CUDA/Stream Processors, Ray Tracing e DLSS/FSR.',
            questions: [
                { q: "Qual a função primária do chip GPU (Graphics Processing Unit)?", opts: ["Processar áudio em alta definição", "Calcular e renderizar gráficos e imagens em alta velocidade paralelizada", "Substituir a memória RAM do sistema", "Gerenciar o tráfego da rede Wi-Fi"], ans: 1, exp: "A GPU possui milhares de pequenos núcleos projetados especificamente para processar milhares de cálculos matemáticos paralelos de pixels/3D." },
                { q: "O que é a VRAM (Video RAM) presente na placa de vídeo?", opts: ["Memória rápida dedicada para armazenar texturas, modelos 3D e framebuffers", "A memória interna do monitor", "Um backup da BIOS do computador", "A memória do processador usada em vídeos"], ans: 0, exp: "A VRAM armazena rapidamente os ativos visuais exigidos pela GPU para montar cada quadro exibido na tela." },
                { q: "O que é a tecnologia Ray Tracing acelerada por hardware?", opts: ["Uma técnica para aumentar a velocidade da ventoinha", "Simulação em tempo real do comportamento físico de raios de luz e reflexos", "Um tipo de cabo de vídeo mais fino", "O aumento automático da resolução do monitor"], ans: 1, exp: "O Ray Tracing calcula trajetórias reais de fótons para gerar sombras, refrações e reflexos fidedignos à realidade." },
                { q: "Como funcionam as tecnologias de Upscaling como NVIDIA DLSS e AMD FSR?", opts: ["Aumentam o consumo de energia para gerar mais quadros", "Renderizam o jogo em resolução menor e usam algoritmos/IA para reconstruir em alta resolução", "Overclockam a GPU automaticamente", "Desligam as sombras do jogo"], ans: 1, exp: "Ao renderizar o jogo internamente em resolução menor (ex: 1080p) e reconstruir para 4K via IA, ganha-se muito desempenho sem perda visual visível." },
                { q: "Como são chamados os núcleos de processamento paralelo em GPUs da NVIDIA e da AMD, respectivamente?", opts: ["CUDA Cores e Stream Processors", "Tensor Cores e Ray Cores", "Raster Cores e Shaders", "G-Sync e FreeSync"], ans: 0, exp: "NVIDIA utiliza o termo 'CUDA Cores', enquanto a AMD denomina suas unidades de processamento de 'Stream Processors'." },
                { q: "O que acontece quando um jogo exige 10 GB de VRAM mas a placa possui apenas 8 GB?", opts: ["O jogo fecha instantaneamente com erro de GPU", "A placa usa a RAM do sistema via PCIe, gerando engasgos acentuados (stuttering)", "A placa de vídeo queima por sobrecarga", "O monitor desliga sozinho"], ans: 1, exp: "A GPU apela para a RAM do sistema. Como a RAM é muito mais lenta que a VRAM e passa pelo PCIe, ocorrem quedas bruscas de FPS." },
                { q: "Qual conector de vídeo moderno suporta as maiores larguras de banda para altas taxas de atualização (ex: 4K a 240 Hz)?", opts: ["VGA (D-Sub)", "DVI-D Single Link", "DisplayPort 2.1", "HDMI 1.4"], ans: 2, exp: "O DisplayPort 2.1 oferece larguras de banda massivas de até 80 Gbps, permitindo resoluções extremas sem compressão agressiva." },
                { q: "Qual a função das Tensor Cores presentes nas GPUs NVIDIA RTX?", opts: ["Processar o som dos jogos", "Acelerar cálculos de redes neurais e Inteligência Artificial (como o DLSS)", "Esfriar a placa de vídeo", "Calcular a física de água dos jogos"], ans: 1, exp: "Tensor Cores são unidades matemáticas especializadas na multiplicação de matrizes usada em modelos de IA e aprendizado profundo." },
                { q: "O que é a tecnologia Resizable BAR (ou AMD Smart Access Memory)?", opts: ["Permite à CPU acessar toda a VRAM da GPU de uma só vez, reduzindo gargalos", "Aumenta o tamanho físico da placa de vídeo", "Permite usar duas placas de vídeo via cabo", "Muda a cor dos LEDs da placa"], ans: 0, exp: "Em vez de acessar a VRAM em pequenos blocos de 256 MB, a CPU ganha acesso direto e simultâneo a todo o buffer da placa de vídeo." },
                { q: "O que significa o termo 'Gargalo' (Bottleneck) entre CPU e GPU?", opts: ["Quando um componente é muito mais fraco que o outro, limitando o desempenho máximo do sistema", "Quando os cabos da fonte estão dobrados", "Quando a placa de vídeo não entra no gabinete", "Quando o monitor tem resolução muito baixa"], ans: 0, exp: "Se a CPU for fraca, ela não consegue enviar dados rápidos o suficiente para a GPU renderizar, deixando a GPU subutilizada." }
            ]
        },
        {
            id: 'psu',
            name: 'Fonte de Alimentação',
            icon: 'fa-plug',
            color: '#ff2a5f',
            image: CONFIG.paths.images + 'fonte.jpg',
            imageAlt: 'Fonte de alimentação ATX aberta',
            imageCredit: 'Dmitry Makeev',
            imageLicense: 'CC BY-SA 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:ATX_Computer_power_supply_unit.jpg',
            desc: 'Certificação 80 Plus, PFC Ativo, barramento +12 V e modularidade.',
            questions: [
                { q: "Qual a função principal da fonte de alimentação (PSU) no PC?", opts: ["Armazenar energia em baterias internas", "Converter a corrente alternada (AC) da tomada em corrente contínua (DC) estável", "Proteger contra vírus de computador", "Aumentar a velocidade da CPU"], ans: 1, exp: "As fontes convertem 110 V/220 V AC da rede elétrica em baixas tensões DC (3,3 V, 5 V e 12 V) consumidas pelos circuitos internos." },
                { q: "O que garante a certificação 80 Plus em uma fonte?", opts: ["Garantia de 80 meses contra defeitos", "Eficiência energética de no mínimo 80% em diferentes níveis de carga", "Potência garantida de 800 W", "Apenas fontes com 80 pinos"], ans: 1, exp: "O selo 80 Plus atesta que a fonte desperdiça menos de 20% da energia em forma de calor ao converter AC para DC." },
                { q: "Qual o nível mais elevado de eficiência na escala da certificação 80 Plus?", opts: ["80 Plus Bronze", "80 Plus Gold", "80 Plus Platinum", "80 Plus Titanium"], ans: 3, exp: "A hierarquia vai do nível básico 80 Plus (White) -> Bronze -> Silver -> Gold -> Platinum -> Titanium, o topo da escala (com eficiência acima de 90%)." },
                { q: "O que caracteriza uma fonte de alimentação 'Totalmente Modular'?", opts: ["Ela pode ser aberta sem perder a garantia", "Todos os cabos são destacáveis, permitindo conectar apenas os necessários", "Ela ajusta a voltagem com um controle remoto", "Funciona sem ventoinha"], ans: 1, exp: "Fontes modulares facilitam a organização de cabos no gabinete, melhorando o fluxo de ar e o acabamento visual." },
                { q: "Qual a linha de tensão (rail) mais crítica para alimentar a CPU e a GPU atualmente?", opts: ["Linha de +3,3 V", "Linha de +5 V", "Linha de +12 V", "Linha de -12 V"], ans: 2, exp: "A linha de +12 V entrega quase toda a potência exigida pelos componentes de alto consumo do PC (Processador e Placa de Vídeo)." },
                { q: "Para que serve o circuito PFC Ativo (Power Factor Correction) em fontes modernas?", opts: ["Aumentar a rotação da ventoinha", "Maximizar a eficiência do uso da rede elétrica e eliminar a necessidade da chave seletora 110 V/220 V", "Desligar o PC quando entra vírus", "Dar suporte a luzes RGB"], ans: 1, exp: "O PFC ativo corrige a fase da corrente, reduz perdas na rede e torna a fonte bivolt automática (funciona de 90 V a 264 V)." },
                { q: "Por que NÃO se deve utilizar estabilizadores de tensão em fontes modernas com PFC Ativo?", opts: ["Porque o estabilizador gasta muita energia", "Porque os estabilizadores cortam a onda e estressam o circuito PFC da fonte, podendo danificá-la", "Porque o PC fica muito lento", "Porque a fonte perde o selo 80 Plus"], ans: 1, exp: "Estabilizadores dão 'estalos' lentos ao tentar corrigir a rede, submetendo a fonte a surtos e picos de tensão prejudiciais." },
                { q: "Qual o novo conector de energia criado no padrão ATX 3.0 para placas de vídeo de alta potência?", opts: ["Molex 4 pinos", "PCIe 6+2 pinos", "12VHPWR (12+4 pinos) capaz de entregar até 600 W", "SATA Power"], ans: 2, exp: "O conector 12VHPWR entrega até 600 W em um único cabo compacto equipado com pinos de sinal para comunicação fonte-GPU." },
                { q: "A proteção OCP (Over Current Protection) na fonte serve para:", opts: ["Desligar a fonte caso uma linha exceda o limite seguro de amperagem", "Proteger contra altas temperaturas", "Impedir que a fonte molhe", "Evitar surtos de raio na linha telefônica"], ans: 0, exp: "OCP (Proteção contra Sobrecorrente) desliga os circuitos imediatamente se a demanda de corrente superar o limite seguro da fiação." },
                { q: "O que acontece se você instalar uma fonte de 400 W em um PC que exige 600 W sob carga máxima?", opts: ["A fonte entregará 600 W normalmente", "O PC desligará ou reiniciará por disparo das proteções térmicas/potência (OPP/OCP) ao jogar", "O processador queimará no primeiro segundo", "A velocidade da internet cairá"], ans: 1, exp: "Sob carga pesada, a demanda excederá a capacidade máxima, ativando a proteção contra sobrepotência (OPP) para evitar danos ao sistema." }
            ]
        },
        {
            id: 'cooling',
            name: 'Sistema de Arrefecimento',
            icon: 'fa-fan',
            color: '#00f0ff',
            image: CONFIG.paths.images + 'cooler.jpg',
            imageAlt: 'Cooler de torre Noctua NH-U12P SE2',
            imageCredit: 'Eric Gaba (Sting)',
            imageLicense: 'CC BY-SA 3.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:Noctua_NH-U12P_SE2_CPU_cooler.jpg',
            desc: 'Air coolers, Watercoolers AIO, pressão de ar e pasta térmica.',
            questions: [
                { q: "Qual a diferença entre um Air Cooler de torre e um Watercooler Selado (AIO)?", opts: ["O Air Cooler usa ar para resfriar o dissipador (heatsink); o Watercooler usa fluido líquido em circuito fechado para transferir calor ao radiador", "Watercooler não usa ventoinhas", "Air Cooler só funciona em notebooks", "Watercooler precisa ser reabastecido com água da torneira toda semana"], ans: 0, exp: "AIOs usam fluido especial circulado por uma bomba até um radiador externo, onde ventoinhas dissipam o calor acumulado." },
                { q: "O que são os 'Heatpipes' encontrados em dissipadores de metal?", opts: ["Tubos de plástico decorativos", "Tubos de cobre ocos contendo fluido que evapora e condensa para transferir calor rapidamente", "Cabos de energia dos coolers", "Canos para drenar água condensada"], ans: 1, exp: "Heatpipes aproveitam a mudança de fase (líquido-vapor) de um fluido interno para conduzir calor da base até as aletas de alumínio." },
                { q: "O que caracteriza a montagem de um gabinete com 'Pressão Positiva' de ar?", opts: ["Mais ar sendo empurrado para DENTRO pelas ventoinhas do que sendo exaurido para FORA", "Ventoinhas girando na velocidade máxima o tempo todo", "Sem nenhuma ventoinha instalada", "Todas as ventoinhas jogando ar para fora"], ans: 0, exp: "Pressão positiva (Entrada > Saída) força o ar a sair pelas frestas do gabinete, reduzindo o acúmulo de poeira nas frestas sem filtro." },
                { q: "Qual tipo de ventoinha é ideal para ser instalada em radiadores de Watercooler?", opts: ["Ventoinhas focadas em alto fluxo de ar (CFM)", "Ventoinhas focadas em alta pressão estática (mmH2O)", "Ventoinhas sem pás (Dyson style)", "Qualquer ventoinha de 80mm"], ans: 1, exp: "Pressão estática elevada é necessária para empurrar o ar através das aletas de alumínio extremamente densas de um radiador." },
                { q: "Qual o risco de apertar excessivamente os parafusos do cooler sobre o processador?", opts: ["Drenar a bateria da placa-mãe", "Entortar os pinos do soquete ou danificar as trilhas de memória da placa-mãe", "Fazer o fluido do Watercooler vazar", "Aumentar demais a velocidade do PC"], ans: 1, exp: "Pressão mecânica exagerada pode empenar o PCB do soquete/CPU, causando mal contato nos pinos do barramento de memória." },
                { q: "O que é o controle de rotação PWM (Pulse Width Modulation) em conectores de 4 pinos?", opts: ["Ajuste estático de luz RGB", "Controle dinâmico e preciso da velocidade da ventoinha pelo SO/BIOS variando o sinal elétrico", "Um botão físico na ventoinha", "Modo de silêncio absoluto com cooler desligado"], ans: 1, exp: "O 4º pino envia um sinal PWM que permite ajustar a porcentagem de rotação (0-100%) da ventoinha, com base na temperatura da CPU." },
                { q: "Qual a maneira correta de aplicar pasta térmica na CPU?", opts: ["Espalhar uma camada de 3 milímetros por toda a placa-mãe", "Aplicar uma pequena quantidade equivalente a um grão de ervilha no centro do IHS", "Preencher todo o soquete antes de colocar o chip", "Lavar o processador com água antes de passar a pasta"], ans: 1, exp: "Uma pequena porção central se espalhará de forma homogênea e fina por toda a área ao pressionar a base metálica do cooler." },
                { q: "Para onde o calor expelido pelo exaustor traseiro/superior do gabinete deve ser direcionado?", opts: ["Para dentro do gabinete", "Para fora do gabinete (ambiente externo)", "Para a placa de vídeo", "Para a fonte de alimentação"], ans: 1, exp: "Ar quente sobe e deve ser expelido para fora do gabinete para manter a temperatura interna do gabinete amena." },
                { q: "O que mede a especificação CFM de uma ventoinha?", opts: ["Cubic Feet per Minute (pés cúbicos por minuto) - o volume de ar movido pela ventoinha", "Consumo em Watts", "Nível de ruído em Decibéis", "Frequência de rotação por segundo"], ans: 0, exp: "CFM mede o volume total de ar deslocado pela ventoinha. Quanto maior o CFM, mais ar ela consegue mover por minuto." },
                { q: "Qual a função do bloco de cobre (Waterblock) em um Watercooler?", opts: ["Armazenar as luzes RGB", "Absorver o calor do IHS da CPU e transferi-lo diretamente para o fluido líquido em circulação", "Filtrar a poeira do ar", "Garantir que a água não esquente"], ans: 1, exp: "O waterblock contém microcanais de cobre que maximizam a área de contato entre a CPU quente e o fluido refrigerante." }
            ]
        },
        {
            id: 'network',
            name: 'Rede e Conectividade',
            icon: 'fa-network-wired',
            color: '#7000ff',
            image: CONFIG.paths.images + 'rede.jpg',
            imageAlt: 'Switch Ethernet de rede',
            imageCredit: 'Deavmi',
            imageLicense: 'CC BY-SA 3.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:Ethernet_switch_2.jpg',
            desc: 'Placas Ethernet Gigabit, padrões Wi-Fi 6/7, cabos e IP.',
            questions: [
                { q: "Qual o conector padrão utilizado em cabos de rede Ethernet trançados (ex: Cat5e/Cat6)?", opts: ["RJ-11", "RJ-45", "USB-C", "HDMI"], ans: 1, exp: "O conector modular RJ-45 de 8 pinos é o padrão universal para redes locais Ethernet cabeadas." },
                { q: "Qual a velocidade máxima teórica de uma placa de rede Ethernet 2,5 GbE?", opts: ["100 Megabits por segundo", "1 Gigabit por segundo", "2.500 Megabits por segundo (~312 MB/s)", "10 Gigabits por segundo"], ans: 2, exp: "2,5 GbE oferece 2.500 Mbps, 2,5 vezes mais rápida que a tradicional rede Gigabit (1.000 Mbps)." },
                { q: "Qual a principal vantagem das frequências de 5 GHz e 6 GHz no Wi-Fi 6E/7 sobre a antiga banda de 2,4 GHz?", opts: ["Maior alcance de sinal através de paredes de concreto", "Velocidades muito maiores e menor interferência de outros aparelhos", "Não necessitar de senhas de acesso", "Consumo zero de bateria"], ans: 1, exp: "Frequências mais altas oferecem canais mais largos e velocidades muito superiores, embora tenham menor penetração em obstáculos sólidos." },
                { q: "Qual categoria de cabo de rede trançado é blindada e recomendada para redes de 10 Gbps até 100 metros?", opts: ["Cat 3", "Cat 5e", "Cat 6a / Cat 7", "Cabo telefônico plano"], ans: 2, exp: "Os cabos Cat 6a possuem blindagem reforçada contra diafonia (crosstalk) e suportam 10 Gbps na distância máxima de 100 metros." },
                { q: "O que é um Endereço MAC (Media Access Control)?", opts: ["O endereço de IP atribuído pelo provedor de internet", "Um identificador físico único gravado no hardware da placa de rede de fábrica", "O nome da rede Wi-Fi", "A senha do roteador"], ans: 1, exp: "O endereço MAC é o 'RG' físico de 48 bits gravado pelo fabricante no chip de rede, exclusivo no mundo todo." },
                { q: "Qual a função de um Switch em uma rede local (LAN)?", opts: ["Conectar múltiplos dispositivos em rede e encaminhar quadros de dados diretamente ao destino correto", "Converter sinal de fibra óptica em cabo de TV", "Proteger o computador contra queda de raios", "Distribuir sinal de TV a cabo"], ans: 0, exp: "O Switch lê os endereços MAC para criar caminhos diretos entre portas, otimizando o tráfego da rede local." },
                { q: "O que é o ping, ou latência de rede, medido em milissegundos (ms)?", opts: ["A quantidade de dados baixados por segundo", "O tempo que um pacote de dados leva para ir do seu computador até o servidor e retornar", "A força do sinal da antena Wi-Fi", "A taxa de atualização da tela do jogo"], ans: 1, exp: "Quanto menor o ping (latência), mais rápida é a resposta do servidor aos seus comandos em jogos e chamadas online." },
                { q: "A tecnologia de Wi-Fi chamada MU-MIMO serve para:", opts: ["Permitir ao roteador comunicar-se com múltiplos dispositivos simultaneamente sem filas", "Aumentar a velocidade do cabo Ethernet", "Desligar o Wi-Fi quando você dorme", "Bloquear anúncios na internet"], ans: 0, exp: "MU-MIMO (Multi-User, Multiple-Input, Multiple-Output) atende múltiplos aparelhos ao mesmo tempo sem divisão de tempo." },
                { q: "Qual protocolo é responsável por atribuir endereços de IP automaticamente aos computadores da rede?", opts: ["DNS", "DHCP", "FTP", "HTTP"], ans: 1, exp: "O servidor DHCP do roteador entrega automaticamente IPs, máscaras e gateways para novos dispositivos conectados à rede." },
                { q: "O que faz um servidor DNS na internet?", opts: ["Criptografa suas senhas bancárias", "Traduz nomes de domínios (ex: www.google.com) em endereços de IP numéricos que os computadores entendem", "Aumenta a velocidade do seu plano de internet", "Armazena arquivos em nuvem"], ans: 1, exp: "DNS atua como a 'lista telefônica' da internet, convertendo URLs amigáveis em endereços de IP legíveis por roteadores." }
            ]
        },
        {
            id: 'case',
            name: 'Gabinete',
            icon: 'fa-box',
            color: '#ffb700',
            image: CONFIG.paths.images + 'gabinete.jpg',
            imageAlt: 'Interior de um gabinete de computador Be Quiet',
            imageCredit: 'Tim Sheerman-Chase',
            imageLicense: 'CC BY 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:Be_Quiet_PC_Case_Interior_with_GTX_3060_and_P40.jpg',
            desc: 'Fluxo de ar, fatores de forma, gerenciamento de cabos e filtros de poeira.',
            questions: [
                { q: "Por que a escolha do tamanho do gabinete (Mid-Tower, Full-Tower) é crucial no projeto de um PC?", opts: ["Apenas pela cor do ambiente", "Para garantir compatibilidade física com o tamanho da placa-mãe, tamanho da GPU e radiadores", "Para o computador gastar menos eletricidade", "Porque gabinetes grandes aumentam a memória RAM"], ans: 1, exp: "Gabinetes precisam acomodar fisicamente o formato da placa-mãe (ATX, ITX), comprimento da GPU e altura dos coolers." },
                { q: "O que é o painel frontal I/O do gabinete?", opts: ["A tampa lateral de vidro temperado", "O conjunto de portas USB, conectores de áudio P2 e botões Power/Reset acessíveis na parte externa", "A parte de trás onde se conecta a fonte", "Os pés de borracha do gabinete"], ans: 1, exp: "O painel frontal conecta botões e conexões convenientes aos conectores dedicados da placa-mãe via cabos internos." },
                { q: "Qual a função dos filtros de poeira magnéticos instalados nas entradas de ar do gabinete?", opts: ["Esconder as luzes RGB", "Reter partículas de sujeira antes que entrem no gabinete, facilitando a limpeza periódica", "Aumentar o ruído das ventoinhas", "Diminuir o peso do gabinete"], ans: 1, exp: "Filtros laváveis impedem o acúmulo de poeira sobre os dissipadores, mantendo a eficiência térmica do PC por mais tempo." },
                { q: "O que significa a especificação de altura máxima de cooler de CPU suportada pelo gabinete?", opts: ["O comprimento total do gabinete", "A distância limite em milímetros entre a superfície da CPU e a tampa lateral para o air cooler caber fechado", "A altura dos pés do gabinete", "A quantidade de coolers de água suportados"], ans: 1, exp: "Se o cooler de ar for mais alto que o espaço interno, a tampa de vidro ou metal do gabinete não conseguirá fechar." },
                { q: "Qual o benefício de ter espaço dedicado para 'Cable Management' atrás da placa-mãe?", opts: ["Deixar os cabos expostos por estilo", "Melhorar a estética visual e evitar que fios soltos bloqueiem o fluxo de ar das ventoinhas", "Aumentar o sinal do Wi-Fi", "Não precisar usar a fonte de alimentação"], ans: 1, exp: "Esconder cabos na câmara traseira desimpedirá a circulação de ar na câmara principal e resultará em uma montagem limpa." },
                { q: "O que é a cobertura 'PSU Shroud' presente na base de gabinetes modernos?", opts: ["Uma capa para cobrir o monitor", "Um compartimento inferior que esconde a fonte de alimentação e o excesso de cabos soltos", "Um tipo de ventoinha gigante", "Uma tampa que impede o gabinete de abrir"], ans: 1, exp: "O PSU Shroud esconde a fonte e o emaranhado de cabos, separando o calor da câmara principal de componentes." },
                { q: "Por que painéis frontais em Mesh (malha perfurada) são preferidos por entusiastas em relação ao vidro fechado?", opts: ["São mais fáceis de quebrar", "Permitem entrada massiva de ar frio puxado pelas ventoinhas frontais, reduzindo as temperaturas", "Fazem o PC gastar menos energia", "São mais baratos de fabricar"], ans: 1, exp: "Painéis frontais fechados de vidro estrangulam a aspiração das ventoinhas; o painel de Mesh perfurado garante um fluxo de ar irrestrito." },
                { q: "Qual formato de gabinete é projetado para placas-mãe ultra-compactas Mini-ITX?", opts: ["Full Tower", "SFF (Small Form Factor)", "Server Rack 4U", "E-ATX Chassis"], ans: 1, exp: "SFF (Small Form Factor) são gabinetes miniaturizados fáceis de transportar e extremamente compactos para mesas pequenas." },
                { q: "Para que servem os 'Standoffs' (espaçadores de latão/metal) rosqueados na chapa do gabinete?", opts: ["Prender as placas de vídeo", "Isolar a placa-mãe do contato direto com a chapa de metal do gabinete para evitar curto-circuito", "Decorar o interior com cor dourada", "Fixar os discos rígidos no lugar"], ans: 1, exp: "Os espaçadores mantêm os pontos de solda da traseira da placa-mãe longe da chapa metálica condutora do gabinete." },
                { q: "O que são as tampas de expansão PCIe traseiras (PCI Slots Covers)?", opts: ["Saídas de água do computador", "Lâminas removíveis no gabinete que dão acesso aos conectores das placas de expansão (como a GPU)", "Apoios para manter o gabinete em pé", "Aberturas para colocar drives de CD"], ans: 1, exp: "Ao instalar uma placa de vídeo x16, removem-se 2 ou 3 tampas traseiras para liberar o acesso às suas portas de vídeo." }
            ]
        },
        {
            id: 'peripherals',
            name: 'Periféricos',
            icon: 'fa-keyboard',
            color: '#ff007f',
            image: CONFIG.paths.images + 'perifericos.jpg',
            imageAlt: 'Teclado mecânico gaming',
            imageCredit: 'Morn',
            imageLicense: 'CC BY-SA 4.0',
            imagePage: 'https://commons.wikimedia.org/wiki/File:Lingbao_JIGUANSHI_Mechanical_Gaming_Keyboard.jpg',
            desc: 'Switches mecânicos, sensores ópticos DPI/IPS e taxas Hz de monitores.',
            questions: [
                { q: "Qual a diferença de sensação entre um switch mecânico 'Linear' e um 'Tátil' em teclados?", opts: ["Linear é mais barulhento; Tátil é silencioso", "Linear é suave do topo ao fim; Tátil possui uma pequena resistência ('bump') perceptível no ponto de atuação", "Tátil não tem mola interna", "Linear só funciona para digitar textos"], ans: 1, exp: "Switches táteis (ex: Brown) avisam o momento exato do registro da tecla com uma leve saliência tátil na descida." },
                { q: "O que indica a especificação DPI (Dots Per Inch) em um mouse gamer?", opts: ["O peso do mouse em gramas", "A sensibilidade do sensor - quantos pixels o cursor se move na tela para cada polegada física movida", "A quantidade de botões programáveis", "A velocidade da ventoinha interna do mouse"], ans: 1, exp: "DPIs mais altos tornam o cursor extremamente sensível, movendo muitos pixels na tela com um deslocamento mínimo da mão." },
                { q: "Qual a vantagem de um monitor com taxa de atualização de 144 Hz ou 240 Hz, comparado a um de 60 Hz?", opts: ["Cores muito mais vivas e brilhantes", "Exibição de mais quadros por segundo, resultando em imagens em movimento extremamente fluidas e menor input lag", "Menor consumo de energia elétrica", "Resolução 4K garantida em todos os jogos"], ans: 1, exp: "Um painel de 144 Hz atualiza a imagem 144 vezes por segundo, eliminando rastros e reduzindo o atraso de comando nos jogos." },
                { q: "O que mede a métrica IPS (Inches Per Second) de um sensor de mouse?", opts: ["A quantidade de fotos que o sensor tira por segundo", "A velocidade física máxima de rastreamento da mão antes do sensor perder a leitura", "O tamanho do cabo USB", "A durabilidade dos cliques em milhões de vezes"], ans: 1, exp: "IPS alto garante que o mouse acompanhe movimentos musculares rápidos e bruscos da mão ('flicks') sem falhar ou travar." },
                { q: "Qual tecnologia de painel de monitor oferece preto perfeito e contraste infinito desligando pixels individualmente?", opts: ["TN (Twisted Nematic)", "VA (Vertical Alignment)", "OLED (Organic Light-Emitting Diode)", "IPS tradicional"], ans: 2, exp: "No OLED não há luz de fundo (backlight); cada subpixel emite sua própria luz e desliga completamente para exibir o preto puro." },
                { q: "O que significa o recurso Anti-Ghosting / N-Key Rollover (NKRO) em teclados?", opts: ["Capacidade de pressionar múltiplas teclas simultaneamente e todas serem registradas sem falhas", "Luzes piscarem conforme o ritmo da música", "O teclado funcionar mesmo se você derramar água", "Digitação automática por voz"], ans: 0, exp: "NKRO garante que nenhuma tecla seja 'esquecida' quando você aperta vários botões juntos rapidamente durante jogos." },
                { q: "O que faz a taxa de amostragem Polling Rate (ex: 1.000 Hz, 4.000 Hz) de um mouse?", opts: ["Muda a cor do LED RGB", "Informa a frequência com que o mouse envia atualizações de posição do sensor para a CPU por segundo", "Calcula a distância percorrida pelo mouse", "Determina o tempo de carga da bateria"], ans: 1, exp: "1.000 Hz significa que o mouse se comunica com o computador 1.000 vezes a cada segundo (1 ms de intervalo)." },
                { q: "Qual a função do microfone com padrão polar 'Cardióide' em headsets e microfones de mesa?", opts: ["Capta som de todas as direções igualmente (360 graus)", "Capta o som focado principalmente na frente da cápsula, rejeitando ruídos vindos de trás", "Só capta sons agudos", "Funciona apenas sob a água"], ans: 1, exp: "Padrões cardióides têm formato de coração, isolando a voz do usuário e diminuindo o barulho do teclado atrás do microfone." },
                { q: "O que é a tecnologia de sincronização de quadros NVIDIA G-Sync e AMD FreeSync?", opts: ["Sincroniza a taxa de atualização do monitor com os FPS gerados pela GPU para eliminar o corte de tela (Tearing)", "Dobra o número de cores exibidas na tela", "Conecta o monitor com o smartphone via Bluetooth", "Desliga o monitor quando o jogo fica parado"], ans: 0, exp: "A taxa de atualização variável ajusta o monitor em tempo real aos FPS oscilantes da placa de vídeo, eliminando rupturas visuais." },
                { q: "O que é o tempo de resposta medido em milissegundos (ex: 1 ms GtG) em um monitor?", opts: ["O tempo necessário para ligar a tela na tomada", "O tempo que um pixel leva para mudar de uma cor para outra (Gray-to-Gray)", "O tempo que dura a garantia do produto", "O tempo de carregamento dos menus da tela"], ans: 1, exp: "Tempos de resposta baixos (1ms ou menos) evitam o efeito de 'ghosting' (rastros borrados em objetos em movimento rápido)." }
            ]
        }
    ];
