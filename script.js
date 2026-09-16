const plans = {
  free: { name: "일반", price: "무료" },
  iron: { name: "Plus Iron", price: "₩25,000 / 월" },
  gold: { name: "Plus Gold", price: "₩40,000 / 월" },
  diamond: { name: "Plus Diamond", price: "₩70,000 / 월" }
};

const params = new URLSearchParams(location.search);
const selected = plans[params.get("plan")];
const planName = document.querySelector("#selectedPlan");
const planPrice = document.querySelector("#selectedPrice");

if (selected && planName && planPrice) {
  planName.textContent = selected.name;
  planPrice.textContent = selected.price;
}

const copyButton = document.querySelector("#copyAccount");
const accountNumber = document.querySelector("#accountNumber");

if (copyButton && accountNumber) {
  copyButton.addEventListener("click", async () => {
    const value = accountNumber.textContent.trim();
    if (value === "계좌번호를 입력하세요") return;
    try {
      await navigator.clipboard.writeText(value);
      copyButton.textContent = "복사 완료!";
      setTimeout(() => { copyButton.textContent = "계좌번호 복사"; }, 1400);
    } catch {
      copyButton.textContent = "직접 복사해 주세요";
    }
  });
}
