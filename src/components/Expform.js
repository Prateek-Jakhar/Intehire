import React, { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

export const ExpForm = ({ a1, a2, name, userimg, forumid, userimg }) => {
  const today = new Date();
  const fetchPostForums = async () => {
    setDataForums(data_list2);
    const docRef = await addDoc(collection(db, "forums"), {
      a1: a1,
      a2: a2,
      name: name,
      date: today,
      user_img: userimg,
    });
    const forum_id = docRef.id;
    await setDoc(doc(db, "forums", forum_id), {
      a1: a1,
      a2: a2,
      name: name,
      date: today,
      user_img: userimg,
      id: forum_id,
    });
    const q = query(collection(db, "forums"), where("id", "==", forumid));
    const querySnapshot = await getDocs(q);
    let forum_data;
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      forum_data = doc.data();
    });

    forum_data.experience.push({
      date: today,
      id: forum_id,
      name: name,
      user_id: "random",
    });

    console.log(forum_data);

    await setDoc(
      collection(db, "forums"),
      where("id", "==", forumid),
      forum_data
    );

    toast.success("Form Submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return <ToastContainer></ToastContainer>;
};
