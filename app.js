(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const money = n => '$' + Number(n || 0).toFixed(2);
  let whatsappNumber = '19155002806';
  let currentMode = 'person';
  let currentLang = localStorage.getItem('yovoyLang') || 'es';
  const translations = {"Servicio local en El Paso, TX":"Local service in El Paso, TX","Lun–Sáb · 8am–9pm":"Mon–Sat · 8am–9pm","Servicios":"Services","Cómo funciona":"How it works","Pedir ahora":"Order now","Tu repartidor personal de confianza":"Your trusted personal courier","Tú lo necesitas.":"You need it.","Nosotros vamos por ti.":"We go get it for you.","Mandados, compras, comida, refacciones y entregas para personas y pequeños negocios de El Paso.":"Errands, shopping, food, auto parts and deliveries for people and small businesses in El Paso.","Hacer un pedido":"Place an order","Soy un negocio":"I run a business","✓ Trato directo":"✓ Direct service","✓ Precio antes de salir":"✓ Price confirmed first","✓ Seguimiento por WhatsApp":"✓ WhatsApp updates","Respuesta rápida":"Quick response","Confirmación por WhatsApp":"Confirmation by WhatsApp","El Paso y alrededores":"El Paso and nearby areas","Tarifa según zona":"Rate based on area","LO HACEMOS FÁCIL":"WE MAKE IT EASY","Un mandado menos en tu lista":"One less errand on your list","Cuéntanos qué necesitas. Confirmamos costo, disponibilidad y hora estimada antes de comenzar.":"Tell us what you need. We confirm price, availability and estimated time before we begin.","Auto y refacciones":"Auto parts & supplies","Recogemos piezas, accesorios y herramientas para tu vehículo.":"We pick up parts, accessories and tools for your vehicle.","Pedir esto →":"Order this →","Súper y mandados":"Groceries & errands","Compras del súper, farmacia permitida y encargos cotidianos.":"Groceries, permitted pharmacy items and everyday errands.","Antojos y pago de recibos":"Cravings & bill payments","Café, snacks y pago de recibos autorizados con comprobante.":"Coffee, snacks and authorized bill payments with proof.","Comida y restaurantes":"Food & restaurants","Recogemos en tu restaurante favorito y lo llevamos hasta ti.":"We pick up from your favorite restaurant and bring it to you.","Entregas locales":"Local deliveries","Documentos, paquetes y pedidos de pequeños negocios.":"Documents, packages and small-business orders.","¿Otra cosa?":"Something else?","Descríbela y te decimos si podemos ayudarte y cuánto cuesta.":"Describe it and we’ll tell you if we can help and what it costs.","Cuéntanos →":"Tell us →","SIN COMPLICACIONES":"NO HASSLE","Así funciona":"How it works","Describe tu mandado":"Describe your errand","Lugares, artículos, horario y forma de pago.":"Locations, items, timing and payment method.","Recibe confirmación":"Get confirmation","Te damos tarifa y tiempo estimado por WhatsApp.":"We send your rate and estimated time by WhatsApp.","Vamos por ti":"We go for you","Un repartidor toma el pedido y te mantiene al tanto.":"A courier accepts the order and keeps you updated.","Entrega lista":"Delivery complete","Recibes comprobante y confirmas la entrega.":"You receive proof and confirm delivery.","PARA PEQUEÑOS NEGOCIOS":"FOR SMALL BUSINESSES","Tu entrega, sin contratar una flotilla.":"Your deliveries, without hiring a fleet.","Solicita entregas el mismo día, rutas recurrentes o recolecciones. Ideal para tiendas, talleres, reposterías y ventas por redes sociales.":"Request same-day deliveries, recurring routes or pickups. Ideal for shops, garages, bakeries and social-media sellers.","Pedidos individuales":"Single orders","Rutas recurrentes":"Recurring routes","Comprobante de entrega":"Proof of delivery","Solicitar servicio comercial →":"Request business service →","EMPIEZA AQUÍ":"START HERE","¿Qué hacemos por ti?":"What can we do for you?","Completa los datos y revisa tu estimado. Al final abriremos WhatsApp con el pedido ya escrito.":"Complete the details and review your estimate. At the end, WhatsApp will open with your order already written.","Pedido personal":"Personal order","Pequeño negocio":"Small business","Repartidores":"Couriers","El mandado":"The errand","¿Qué necesitas que hagamos?":"What do you need us to do?","Tipo de servicio":"Service type","Selecciona una opción":"Choose an option","Lista o instrucciones":"List or instructions","Monto aproximado de compra ($)":"Estimated purchase amount ($)","¿Cuándo?":"When?","Hoy, sin prisa":"Today, no rush","Lo antes posible (+$4)":"As soon as possible (+$4)","Programar horario":"Schedule a time","Fecha y hora":"Date and time","Ruta y contacto":"Route and contact","¿De dónde recogemos y dónde entregamos?":"Where do we pick up and deliver?","Dirección o negocio de recolección":"Pickup address or business","Dirección de entrega":"Delivery address","Zona":"Area","Central / Northeast":"Central / Northeast","East El Paso":"East El Paso","West / Upper Valley":"West / Upper Valley","Horizon / Socorro / Far East":"Horizon / Socorro / Far East","Nombre":"Name","Teléfono":"Phone","Nombre del negocio":"Business name","Instrucciones comerciales":"Business instructions","Forma de pago":"Payment method","La cuenta exacta se confirma por WhatsApp.":"Exact payment details are confirmed by WhatsApp.","Pago digital":"Digital payment","Efectivo":"Cash","Con confirmación":"With confirmation","Para compras o pago de recibos, confirmamos el total y solicitamos el dinero antes de realizarlo. Recibirás foto del comprobante.":"For purchases or bill payments, we confirm the total and request funds before completing it. You will receive a photo of the receipt.","Acepto que el precio mostrado es estimado y que el pedido inicia únicamente después de recibir confirmación por WhatsApp.":"I understand the displayed price is an estimate and the order begins only after WhatsApp confirmation.","ESTIMADO":"ESTIMATE","Disponible hoy":"Available today","entrega estimada":"estimated delivery","Tarifa base":"Base rate","Prioridad":"Priority","Compra estimada":"Estimated purchase","Total con compra":"Total with purchase","La tarifa final depende de distancia, esperas y número de paradas. Te la confirmamos antes de salir.":"Final pricing depends on distance, wait time and number of stops. We confirm it before leaving.","Enviar pedido por WhatsApp":"Send order by WhatsApp","Usar número alterno: 915-232-1780":"Use alternate number: 915-232-1780","🔒 Tus datos solo se usan para coordinar este pedido.":"🔒 Your information is used only to coordinate this order.","PORTAL DE REPARTIDORES":"COURIER PORTAL","Listo para salir.":"Ready to hit the road.","Entra para ver pedidos disponibles, aceptar mandados y actualizar entregas.":"Sign in to see available orders, accept errands and update deliveries.","Iniciar sesión":"Sign in","Usuario":"Username","Contraseña":"Password","Usuario o contraseña incorrectos.":"Incorrect username or password.","Entrar →":"Sign in →","Probar acceso demo":"Try demo access","Cerrar sesión":"Sign out","PANEL DE REPARTIDOR":"COURIER DASHBOARD","Pedidos hoy":"Orders today","Ganancia estimada":"Estimated earnings","Estado":"Status","● Disponible":"● Available","Pedidos disponibles":"Available orders","Contacto":"Contact","Horario":"Hours","Lunes a sábado":"Monday through Saturday","Síguenos":"Follow us","Tu repartidor personal de confianza.":"Your trusted personal courier."};
  Object.assign(translations, {"Entrega local":"Local delivery","Otro mandado":"Other errand","Demo: repartidor / yovoy2026":"Demo: repartidor / yovoy2026","Efectivo requiere confirmación. Para clientes nuevos o compras mayores de $75 puede solicitarse anticipo digital.":"Cash requires confirmation. New customers or purchases over $75 may require a digital deposit.","Usar número principal: 915-500-2806":"Use primary number: 915-500-2806","● No disponible":"● Unavailable","Aceptar pedido":"Accept order","✓ Aceptado":"✓ Accepted"});
  Object.assign(translations, {"Distancia aproximada (millas)":"Estimated distance (miles)","Paradas adicionales":"Additional stops","Ninguna":"None","1 parada (+$4)":"1 stop (+$4)","2 paradas (+$8)":"2 stops (+$8)","3 paradas (+$12)":"3 stops (+$12)","Tamaño del pedido":"Order size","Pequeño — cabe en un asiento":"Small — fits on one seat","Mediano — varias bolsas (+$3)":"Medium — several bags (+$3)","Grande — cajuela llena (+$7)":"Large — full trunk (+$7)","Salida + millas":"Base + mileage","Servicio y tamaño":"Service and size","Paradas extra":"Extra stops","Compra o recibo":"Purchase or bill","Fórmula: $7 de salida + $1.50 por milla; mínimo $12. Incluye 10 minutos de espera. Después, $0.50 por minuto con confirmación.":"Formula: $7 base + $1.50 per mile; $12 minimum. Includes 10 minutes of waiting. After that, $0.50 per minute with confirmation."});
  Object.assign(translations, {"Usuario o email":"Username or email","Demo: repartidor / yovoy2026Producción: email asignado por el administrador.":"Demo: repartidor / yovoy2026Production: email assigned by the administrator.","Producción: email asignado por el administrador.":"Production: email assigned by the administrator."});
  const placeholderTranslations = {"Ej. Recoger pedido a nombre de Ana en…":"Example: Pick up order under Ana at…","Ej. AutoZone, 1234 Montana Ave":"Example: AutoZone, 1234 Montana Ave","Calle, número y ZIP":"Street, number and ZIP","Tu nombre":"Your name","Nombre comercial":"Business name","Horario, persona que entrega, número de pedido…":"Hours, pickup contact, order number…","Tu usuario":"Your username","Tu usuario o email":"Your username or email"};

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'es';
    localStorage.setItem('yovoyLang', currentLang);
    document.documentElement.lang = currentLang === 'en' ? 'en-US' : 'es-US';
    document.title = currentLang === 'en' ? 'Yo Voy Por Ti — Errands in El Paso' : 'Yo Voy Por Ti — Mandados en El Paso';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (['SCRIPT','STYLE'].includes(node.parentElement?.tagName)) continue;
      const trimmed = node.nodeValue.trim();
      if (!trimmed) continue;
      if (node.__esText === undefined) node.__esText = trimmed;
      const next = currentLang === 'en' ? (translations[node.__esText] || node.__esText) : node.__esText;
      const lead = node.nodeValue.match(/^\s*/)[0], tail = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = lead + next + tail;
    }
    $('[placeholder]').forEach(el => {
      if (!el.dataset.esPlaceholder) el.dataset.esPlaceholder = el.placeholder;
      el.placeholder = currentLang === 'en' ? (placeholderTranslations[el.dataset.esPlaceholder] || el.dataset.esPlaceholder) : el.dataset.esPlaceholder;
    });
    $('#langToggle').classList.toggle('is-en', currentLang === 'en');
    $('#langToggle').setAttribute('aria-label', currentLang === 'en' ? 'Cambiar a español' : 'Switch to English');
    if (currentMode !== 'driver') $('.order-intro h2').textContent = currentMode === 'business' ? (currentLang === 'en' ? 'Delivery for your business' : 'Entrega para tu negocio') : (currentLang === 'en' ? 'What can we do for you?' : '¿Qué hacemos por ti?');
  }

  $('#langToggle').addEventListener('click', () => { applyLanguage(currentLang === 'es' ? 'en' : 'es'); if (!$('#driverDashboard').classList.contains('hidden')) renderJobs(); });

  const form = $('#orderForm');
  const BASE_FEE = 7;
  const PER_MILE = 1.50;
  const MINIMUM_DELIVERY = 12;
  const EXTRA_STOP_FEE = 4;
  const serviceExtras = { 'Auto y refacciones': 3, 'Súper y mandados': 2, 'Antojos y pago de recibos': 2, 'Comida y restaurantes': 0, 'Entrega local': 2, 'Otro mandado': 3 };
  const sizeExtras = { small: 0, medium: 3, large: 7 };

  function estimate() {
    const service = $('#service').value;
    const miles = Math.min(50, Math.max(1, Number($('#distanceMiles').value) || 1));
    const extraStops = Math.min(3, Math.max(0, Number($('#extraStops').value) || 0));
    const purchase = Math.min(150, Math.max(0, Number($('#purchaseAmount').value) || 0));
    const priority = $('#timing').value === 'priority' ? 4 : 0;
    const baseDistance = Math.max(MINIMUM_DELIVERY, BASE_FEE + (miles * PER_MILE));
    const serviceAndSize = (serviceExtras[service] || 0) + (sizeExtras[$('#itemSize').value] || 0);
    const stopsFee = extraStops * EXTRA_STOP_FEE;
    const delivery = baseDistance + serviceAndSize + stopsFee + priority;
    $('#deliveryPrice').textContent = Number.isInteger(delivery) ? delivery : delivery.toFixed(2);
    $('#baseLine').textContent = money(baseDistance);
    $('#serviceLine').textContent = money(serviceAndSize);
    $('#stopsLine').textContent = money(stopsFee);
    $('#priorityLine').textContent = money(priority);
    $('#purchaseLine').textContent = money(purchase);
    $('#totalLine').textContent = money(delivery + purchase);
    return { baseDistance, serviceAndSize, stopsFee, priority, purchase, delivery, total: delivery + purchase, miles, extraStops, itemSize: $('#itemSize').value };
  }

  ['zone', 'service', 'purchaseAmount', 'timing', 'distanceMiles', 'extraStops', 'itemSize'].forEach(id => $('#' + id).addEventListener('input', estimate));
  $('#details').addEventListener('input', e => $('#charCount').textContent = e.target.value.length);
  $('#timing').addEventListener('change', e => $('#scheduleWrap').classList.toggle('hidden', e.target.value !== 'scheduled'));

  $$('input[name="payment"]').forEach(input => input.addEventListener('change', () => {
    const cash = $('input[name="payment"]:checked').value === 'Efectivo';
    $('#paymentNotice').classList.toggle('warn', cash);
    $('#paymentNotice').textContent = cash
      ? (currentLang === 'en' ? 'Cash requires confirmation. New customers or purchases over $75 may require a digital deposit.' : 'Efectivo requiere confirmación. Para clientes nuevos o compras mayores de $75 puede solicitarse anticipo digital.')
      : (currentLang === 'en' ? 'For purchases or bill payments, we confirm the total and request funds before completing it. You will receive a photo of the receipt.' : 'Para compras o pago de recibos, confirmamos el total y solicitamos el dinero antes de realizarlo. Recibirás foto del comprobante.');
  }));

  function setMode(mode) {
    currentMode = mode;
    $$('.mode-tab').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    const driver = mode === 'driver';
    $('#customerPanel').classList.toggle('hidden', driver);
    $('#driverPanel').classList.toggle('hidden', !driver);
    $$('.business-only').forEach(el => el.classList.toggle('hidden', mode !== 'business'));
    if (mode === 'business') $('#businessName').setAttribute('required', ''); else $('#businessName').removeAttribute('required');
    if (!driver) $('.order-intro h2').textContent = mode === 'business' ? (currentLang === 'en' ? 'Delivery for your business' : 'Entrega para tu negocio') : (currentLang === 'en' ? 'What can we do for you?' : '¿Qué hacemos por ti?');
  }

  $$('.mode-tab').forEach(tab => tab.addEventListener('click', () => setMode(tab.dataset.mode)));
  $$('[data-mode-link="business"]').forEach(link => link.addEventListener('click', () => setTimeout(() => setMode('business'), 150)));
  $$('[data-service]').forEach(button => button.addEventListener('click', () => {
    setMode('person');
    $('#service').value = button.dataset.service;
    estimate();
    $('#pedido').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => $('#details').focus(), 500);
  }));

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  $('#alternateNumber').addEventListener('click', e => {
    const alternate = whatsappNumber === '19155002806';
    whatsappNumber = alternate ? '19152321780' : '19155002806';
    e.currentTarget.textContent = alternate ? (currentLang === 'en' ? 'Use primary number: 915-500-2806' : 'Usar número principal: 915-500-2806') : (currentLang === 'en' ? 'Use alternate number: 915-232-1780' : 'Usar número alterno: 915-232-1780');
    showToast(alternate ? (currentLang === 'en' ? 'Alternate number selected' : 'Se usará el número alterno') : (currentLang === 'en' ? 'Primary number selected' : 'Se usará el número principal'));
  });

  function buildMessage() {
    const quote = estimate();
    const payment = $('input[name="payment"]:checked').value;
    const paymentLabel = currentLang === 'en' && payment === 'Efectivo' ? 'Cash' : payment;
    const scheduled = $('#timing').value === 'scheduled' && $('#schedule').value ? new Date($('#schedule').value).toLocaleString(currentLang === 'en' ? 'en-US' : 'es-MX') : $('#timing').selectedOptions[0].text;
    if (currentLang === 'en') {
      const businessLine = currentMode === 'business' ? '\n🏪 *Business:* ' + $('#businessName').value.trim() + '\n📋 *Business details:* ' + ($('#businessNotes').value.trim() || 'None') : '';
      return [
        '👋 Hello *Yo Voy Por Ti*, I would like to request an errand.', '',
        currentMode === 'business' ? '🏪 *Type:* Small business' : '👤 *Type:* Personal order',
        '🛍️ *Service:* ' + $('#service').selectedOptions[0].text,
        '📝 *Instructions:* ' + $('#details').value.trim(),
        '📍 *Pick up at:* ' + $('#pickup').value.trim(),
        '🏁 *Deliver to:* ' + $('#dropoff').value.trim(),
        '🗺️ *Area:* ' + $('#zone').selectedOptions[0].text,
        '🛣️ *Estimated distance:* ' + quote.miles + ' mi',
        '📌 *Additional stops:* ' + quote.extraStops,
        '📦 *Order size:* ' + $('#itemSize').selectedOptions[0].text,
        '🕐 *Time:* ' + scheduled, businessLine, '',
        '👤 *Name:* ' + $('#name').value.trim(),
        '📱 *Phone:* ' + $('#phone').value.trim(),
        '💳 *Payment:* ' + paymentLabel,
        '🧾 *Estimated purchase:* ' + money(quote.purchase),
        '🚗 *Estimated delivery:* ' + money(quote.delivery),
        '💰 *Estimated total:* ' + money(quote.total), '',
        'I understand pricing and availability are confirmed by WhatsApp before the order begins.'
      ].filter(Boolean).join('\n');
    }
    const businessLine = currentMode === 'business' ? '\n🏪 *Negocio:* ' + $('#businessName').value.trim() + '\n📋 *Datos comerciales:* ' + ($('#businessNotes').value.trim() || 'Ninguno') : '';
    return [
      '👋 Hola *Yo Voy Por Ti*, quiero solicitar un mandado.', '',
      currentMode === 'business' ? '🏪 *Tipo:* Pequeño negocio' : '👤 *Tipo:* Pedido personal',
      '🛍️ *Servicio:* ' + $('#service').selectedOptions[0].text,
      '📝 *Instrucciones:* ' + $('#details').value.trim(),
      '📍 *Recoger en:* ' + $('#pickup').value.trim(),
      '🏁 *Entregar en:* ' + $('#dropoff').value.trim(),
      '🗺️ *Zona:* ' + $('#zone').selectedOptions[0].text,
      '🛣️ *Distancia aproximada:* ' + quote.miles + ' mi',
      '📌 *Paradas adicionales:* ' + quote.extraStops,
      '📦 *Tamaño:* ' + $('#itemSize').selectedOptions[0].text,
      '🕐 *Horario:* ' + scheduled, businessLine, '',
      '👤 *Nombre:* ' + $('#name').value.trim(),
      '📱 *Teléfono:* ' + $('#phone').value.trim(),
      '💳 *Pago:* ' + paymentLabel,
      '🧾 *Compra aproximada:* ' + money(quote.purchase),
      '🚗 *Entrega estimada:* ' + money(quote.delivery),
      '💰 *Total estimado:* ' + money(quote.total), '',
      'Entiendo que el precio y disponibilidad se confirman por WhatsApp antes de iniciar.'
    ].filter(Boolean).join('\n');
  }

  function buildOrderRecord() {
    const quote = estimate();
    const payment = $('input[name="payment"]:checked').value;
    return {
      client_type: currentMode === 'business' ? 'business' : 'person',
      service: $('#service').value,
      details: $('#details').value.trim(),
      purchase_amount: quote.purchase,
      timing: $('#timing').value,
      scheduled_at: $('#timing').value === 'scheduled' && $('#schedule').value ? new Date($('#schedule').value).toISOString() : null,
      pickup_address: $('#pickup').value.trim(),
      dropoff_address: $('#dropoff').value.trim(),
      zone: $('#zone').value,
      distance_miles: quote.miles,
      extra_stops: quote.extraStops,
      item_size: quote.itemSize,
      customer_name: $('#name').value.trim(),
      customer_phone: $('#phone').value.trim(),
      business_name: currentMode === 'business' ? $('#businessName').value.trim() : null,
      business_notes: currentMode === 'business' ? ($('#businessNotes').value.trim() || null) : null,
      payment_method: payment,
      estimate_delivery: quote.delivery,
      estimate_total: quote.total,
      language: currentLang,
      status: 'pending'
    };
  }

  async function saveOrder(record) {
    const config = window.YOVOY_CONFIG || {};
    if (!config.supabaseUrl || !config.supabaseAnonKey) return { saved: false, reason: 'not_configured' };
    const response = await fetch(config.supabaseUrl.replace(/\/$/, '') + '/rest/v1/orders', {
      method: 'POST',
      headers: {
        'apikey': config.supabaseAnonKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(record)
    });
    if (!response.ok) throw new Error('Order save failed: ' + response.status);
    return { saved: true };
  }

  $('#sendOrder').addEventListener('click', () => {
    if (!form.reportValidity()) {
      showToast(currentLang === 'en' ? 'Review the marked fields before continuing' : 'Revisa los campos marcados antes de continuar');
      return;
    }
    if ($('#timing').value === 'scheduled' && !$('#schedule').value) {
      $('#schedule').focus();
      showToast(currentLang === 'en' ? 'Choose the order date and time' : 'Elige la fecha y hora del pedido');
      return;
    }
    const amount = Number($('#purchaseAmount').value) || 0;
    if (amount > 150) {
      $('#purchaseAmount').focus();
      showToast(currentLang === 'en' ? 'The purchase limit in this version is $150' : 'El máximo de compra en esta versión es $150');
      return;
    }
    const orderRecord = buildOrderRecord();
    saveOrder(orderRecord).catch(() => showToast(currentLang === 'en' ? 'WhatsApp will continue; online saving needs review.' : 'WhatsApp continuará; falta revisar el guardado en línea.'));
    const url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  const jobs = [
    { id: 1, tag: ['COMIDA','FOOD'], title: ['Recoger pedido en Chico’s Tacos','Pick up order at Chico’s Tacos'], route: 'Montana Ave → Central El Paso', time: ['Ahora · 5.2 mi','Now · 5.2 mi'], pay: '$11' },
    { id: 2, tag: ['ENTREGA','DELIVERY'], title: ['Paquete de repostería','Bakery package'], route: 'Eastlake → Horizon City', time: '4:30 pm · 8.1 mi', pay: '$16' },
    { id: 3, tag: ['REFACCIÓN','AUTO PART'], title: ['Recoger filtro y entregar en taller','Pick up filter and deliver to auto shop'], route: 'Gateway Blvd → Alameda Ave', time: ['Antes de 6 pm · 6.4 mi','Before 6 pm · 6.4 mi'], pay: '$14' }
  ];

  function driverSession() {
    try { return JSON.parse(sessionStorage.getItem('yovoyDriver') || 'null'); } catch { return null; }
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
  }

  async function fetchDriverJobs(session) {
    if (!session || session.mode !== 'supabase') return jobs;
    const config = window.YOVOY_CONFIG || {};
    const response = await fetch(config.supabaseUrl.replace(/\/$/, '') + '/rest/v1/orders?select=id,service,pickup_address,dropoff_address,distance_miles,scheduled_at,estimate_delivery,status&status=eq.pending&order=created_at.asc&limit=25', {
      headers: { 'apikey': config.supabaseAnonKey, 'Authorization': 'Bearer ' + session.accessToken }
    });
    if (!response.ok) throw new Error('Could not load jobs');
    const rows = await response.json();
    return rows.map(row => ({
      id: row.id,
      tag: String(row.service).toUpperCase(),
      title: row.service,
      route: row.pickup_address + ' → ' + row.dropoff_address,
      time: (row.scheduled_at ? new Date(row.scheduled_at).toLocaleString(currentLang === 'en' ? 'en-US' : 'es-US') : (currentLang === 'en' ? 'As soon as possible' : 'Lo antes posible')) + ' · ' + row.distance_miles + ' mi',
      pay: money(row.estimate_delivery),
      real: true
    }));
  }

  async function acceptJob(id, isReal) {
    if (!isReal) {
      const numericId = Number(id);
      const list = JSON.parse(localStorage.getItem('yovoyAccepted') || '[]');
      if (!list.includes(numericId)) list.push(numericId);
      localStorage.setItem('yovoyAccepted', JSON.stringify(list));
      return true;
    }
    const session = driverSession();
    const config = window.YOVOY_CONFIG || {};
    const response = await fetch(config.supabaseUrl.replace(/\/$/, '') + '/rest/v1/rpc/accept_order', {
      method: 'POST',
      headers: { 'apikey': config.supabaseAnonKey, 'Authorization': 'Bearer ' + session.accessToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({ order_id: id })
    });
    return response.ok && (await response.json()) === true;
  }

  async function renderJobs() {
    const session = driverSession();
    const accepted = JSON.parse(localStorage.getItem('yovoyAccepted') || '[]');
    const li = currentLang === 'en' ? 1 : 0;
    let visibleJobs;
    try { visibleJobs = await fetchDriverJobs(session); }
    catch { visibleJobs = []; showToast(currentLang === 'en' ? 'Could not load online orders.' : 'No se pudieron cargar los pedidos en línea.'); }
    $('#jobsList').innerHTML = visibleJobs.map(job => {
      const isAccepted = !job.real && accepted.includes(job.id);
      const tag = Array.isArray(job.tag) ? job.tag[li] : job.tag;
      const title = Array.isArray(job.title) ? job.title[li] : job.title;
      const time = Array.isArray(job.time) ? job.time[li] : job.time;
      return '<article class="job"><div><div class="job-top"><span class="job-tag">' + escapeHtml(tag) + '</span><span class="job-price">' + escapeHtml(job.pay) + '</span></div><h4>' + escapeHtml(title) + '</h4><p>📍 ' + escapeHtml(job.route) + '</p><p>🕐 ' + escapeHtml(time) + '</p></div><button data-job="' + escapeHtml(job.id) + '" data-real="' + (job.real ? '1' : '0') + '" class="' + (isAccepted ? 'accepted' : '') + '">' + (isAccepted ? (currentLang === 'en' ? '✓ Accepted' : '✓ Aceptado') : (currentLang === 'en' ? 'Accept order' : 'Aceptar pedido')) + '</button></article>';
    }).join('');
    $('#jobsCount').textContent = visibleJobs.length + (currentLang === 'en' ? ' errands' : ' mandados');
    $$('[data-job]').forEach(button => button.addEventListener('click', async () => {
      button.disabled = true;
      const acceptedOk = await acceptJob(button.dataset.job, button.dataset.real === '1');
      await renderJobs();
      showToast(acceptedOk ? (currentLang === 'en' ? 'Order assigned. Contact the customer to confirm.' : 'Pedido asignado. Contacta al cliente para confirmar.') : (currentLang === 'en' ? 'That order is no longer available.' : 'Ese pedido ya no está disponible.'));
    }));
  }

  function showDriverDashboard() {
    $('#driverLogin').classList.add('hidden');
    $('#driverDashboard').classList.remove('hidden');
    $('#dashDate').textContent = new Intl.DateTimeFormat(currentLang === 'en' ? 'en-US' : 'es-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
    renderJobs();
  }

  async function login() {
    const user = $('#driverUser').value.trim();
    const password = $('#driverPass').value;
    if (user.toLowerCase() === 'repartidor' && password === 'yovoy2026') {
      sessionStorage.setItem('yovoyDriver', JSON.stringify({ mode: 'demo' }));
      $('#loginError').classList.add('hidden');
      showDriverDashboard();
      return;
    }
    const config = window.YOVOY_CONFIG || {};
    if (!config.supabaseUrl || !config.supabaseAnonKey || !user.includes('@')) {
      $('#loginError').classList.remove('hidden');
      return;
    }
    try {
      const response = await fetch(config.supabaseUrl.replace(/\/$/, '') + '/auth/v1/token?grant_type=password', {
        method: 'POST',
        headers: { 'apikey': config.supabaseAnonKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user, password })
      });
      if (!response.ok) throw new Error('Invalid credentials');
      const auth = await response.json();
      sessionStorage.setItem('yovoyDriver', JSON.stringify({ mode: 'supabase', accessToken: auth.access_token }));
      $('#loginError').classList.add('hidden');
      showDriverDashboard();
    } catch { $('#loginError').classList.remove('hidden'); }
  }

  $('#loginForm').addEventListener('submit', e => { e.preventDefault(); login(); });
  $('#demoLogin').addEventListener('click', () => { $('#driverUser').value = 'repartidor'; $('#driverPass').value = 'yovoy2026'; login(); });
  $('#logout').addEventListener('click', () => { sessionStorage.removeItem('yovoyDriver'); $('#driverDashboard').classList.add('hidden'); $('#driverLogin').classList.remove('hidden'); });
  $('#availability').addEventListener('click', e => { e.currentTarget.classList.toggle('off'); e.currentTarget.textContent = e.currentTarget.classList.contains('off') ? (currentLang === 'en' ? '● Unavailable' : '● No disponible') : (currentLang === 'en' ? '● Available' : '● Disponible'); });

  if (driverSession()) showDriverDashboard();
  estimate();
  applyLanguage(currentLang);
})();
