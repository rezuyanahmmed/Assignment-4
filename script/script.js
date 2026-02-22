// // let totalCount = document.getElementById('Total')
// // let InterviewCount = document.getElementById('Interview')
// // let RejectedCount = document.getElementById('Rejected')
// // console.log(RejectedCount);



let total = 8;
let interviewTotal = 0;
let rejectedTotal = 0;

const totalCount = document.getElementById("Total");
const interviewCount = document.getElementById("Interview");
const rejectedCount = document.getElementById("Rejected");


// ================= STATUS UPDATE =================
function updateStatus(number, type) {

  const card = document.getElementById("card" + number);
  const badge = document.getElementById("badge" + number);

  if (type === "interview") {

    if (card.dataset.status === "rejected") {
      rejectedTotal--;
    }

    if (card.dataset.status !== "interview") {
      interviewTotal++;
    }

    card.dataset.status = "interview";
    badge.innerText = "INTERVIEW";
  }

  if (type === "rejected") {

    if (card.dataset.status === "interview") {
      interviewTotal--;
    }

    if (card.dataset.status !== "rejected") {
      rejectedTotal++;
    }

    card.dataset.status = "rejected";
    badge.innerText = "REJECTED";
  }

  interviewCount.innerText = interviewTotal;
  rejectedCount.innerText = rejectedTotal;

  checkEmptyState();
}



// ================= DELETE =================
function deleteCard(number) {

  const card = document.getElementById("card" + number);

  if (card.dataset.status === "interview") {
    interviewTotal--;
  }

  if (card.dataset.status === "rejected") {
    rejectedTotal--;
  }

  total--;

  totalCount.innerText = total;
  interviewCount.innerText = interviewTotal;
  rejectedCount.innerText = rejectedTotal;

  card.remove();

  checkEmptyState();
}



// ================= LOOP =================
for (let i = 1; i <= 8; i++) {

  const card = document.getElementById("card" + i);
  if (card) {
    card.dataset.status = "all";
  }

  const interviewBtn = document.getElementById("interview" + i);
  const rejectedBtn = document.getElementById("rejected" + i);
  const deleteBtn = document.getElementById("delete" + i);

  if (interviewBtn) {
    interviewBtn.addEventListener("click", function () {
      updateStatus(i, "interview");
    });
  }

  if (rejectedBtn) {
    rejectedBtn.addEventListener("click", function () {
      updateStatus(i, "rejected");
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      deleteCard(i);
    });
  }
}



// ================= FILTER =================
function filterCards(type) {

  for (let i = 1; i <= 8; i++) {

    const card = document.getElementById("card" + i);
    if (!card) continue;

    if (type === "all") {
      card.style.display = "block";
    }
    else if (card.dataset.status === type) {
      card.style.display = "block";
    }
    else {
      card.style.display = "none";
    }
  }
}



// ================= TAB BUTTON =================
document.getElementById("allBtn").addEventListener("click", function () {
  filterCards("all");
});

document.getElementById("interviewBtn").addEventListener("click", function () {
  filterCards("interview");
});

document.getElementById("rejectedBtn").addEventListener("click", function () {
  filterCards("rejected");
});


// default load
filterCards("all");


// empty function
function checkEmptyState() {

  const emptyState = document.getElementById("emptyState");

  if (interviewTotal === 0 && rejectedTotal === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

}

// ------------------------------------
