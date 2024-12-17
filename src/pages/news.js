export async function fetchNewsContents() {
  const apiUrl = `${import.meta.env.MICROCMS_API_URL}news?orders=-date`;
  const apiKey = import.meta.env.MICROCMS_API_KEY;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey
      },
    });
    const data = await response.json();
    const newsUl = document.querySelector('#accordion-color ul');

    if (data.contents) {
      data.contents.forEach((content, i) => {
        if (i < 3) {
          const li = document.createElement('li');
          li.className = 'md:!mt-[27px] is-not-visible';

          // HTML コンテンツを作成
          li.innerHTML = `
            <p id="accordion-color-heading-${i+1}">
              <button type="button" class="accordion-button md:py-[11px] flex items-center justify-between w-full p-5 rtl:text-right text-white border border-gray-200 rounded-xl gap-3 font-bold" data-accordion-target="#accordion-color-body-${i+1}" aria-expanded="true" aria-controls="accordion-color-body-${i+1}">
                <div class="max-w-[95%] text-left flex items-baseline">
                  <span class="accordion-title md:text-sm text-2xl block max-w-[90%] truncate">${content.title}</span>
                  <span class="md:text-xs text-base ml-[10px]">${formatDate(content.date)}</span>
                </div>
                <img data-accordion-icon src='/src/assets/images/accordion-arrow.png' alt='' class="md:w-[15px] md:h-[15px] h-5 w-5" />
              </button>
            </p>
            <div id="accordion-color-body-${i+1}" class="hidden font-light text-xl" aria-labelledby="accordion-color-heading-${i+1}">
              <div class="p-5 md:pt-0 border border-t-0 border-gray-200 rounded-b-xl">
                <p class="text-white pb-9 text-xl md:text-xs">${content.content}</p>
              </div>
            </div>
          `;

          // li 要素を親に追加
          newsUl.appendChild(li);

          // ボタン要素を取得してイベントリスナーを登録
          const button = li.querySelector('.accordion-button');
          button.addEventListener('click', () => toggleTitleCss(i + 1));
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`
}

function toggleTitleCss(index) {
  const button = document.querySelector(`#accordion-color-heading-${index} .accordion-button`);
  const title = document.querySelector(`#accordion-color-heading-${index} .accordion-title`);

  if (button && title) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');

    if (isExpanded) {
      title.classList.add('max-w-[90%]', 'truncate');
    } else {
      title.classList.remove('max-w-[90%]', 'truncate');
    }
  }
}