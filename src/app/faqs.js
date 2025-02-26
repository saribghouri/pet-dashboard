import React, { useState, useEffect } from "react";
import { Button, Collapse, Divider, Input, Popconfirm, message } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const Faqs = () => {
  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState({});
  const [editedQuestion, setEditedQuestion] = useState("");
  const [editedAnswer, setEditedAnswer] = useState("");

  useEffect(() => {
 
    const dummyFaqs = [
      { _id: "1", question: "How often should I feed my pet?", answer: "Most pets should be fed twice a day, but consult your vet for specific needs." },
      { _id: "2", question: "What vaccinations does my dog need?", answer: "Core vaccines include rabies, distemper, and parvovirus." },
      { _id: "3", question: "How can I prevent fleas and ticks?", answer: "Regular use of flea and tick preventatives is recommended." },
    ];
    
    setItems(dummyFaqs);
    setEditMode(dummyFaqs.reduce((acc, item) => ({ ...acc, [item._id]: false }), {}));
  }, []);

  const toggleEditMode = (id) => {
    setEditMode((prevState) => {
      const newState = { ...prevState };
      newState[id] = !prevState[id];
      return newState;
    });
  };

  const onEditClick = (event, id, initialQuestion, initialAnswer) => {
    event.stopPropagation();
    setEditingItemId(id);
    toggleEditMode(id);
    setEditedQuestion(initialQuestion);
    setEditedAnswer(initialAnswer);
  };

  const onSaveClick = (event, faqId) => {
    event.stopPropagation();
    setItems(items.map((item) =>
      item._id === faqId ? { ...item, question: editedQuestion, answer: editedAnswer } : item
    ));
    message.success("FAQ edited successfully");
    toggleEditMode(faqId);
  };

  const confirmDelete = (event, id) => {
    event.stopPropagation();
    setItems(items.filter((item) => item._id !== id));
    message.success("FAQ deleted successfully");
  };

  return (
    <div>
     
        <div>
          <div className="flex justify-between pl-4 pr-4 items-center mt-4 mb-6">
            <h1 className="text-[22px] text-[#054fb9] font-sans">Pet Care Tips</h1>
          
          </div>

          <Divider className="!w-[97%] bg-[#054fb9]" />

          <div className="w-[50%] mx-auto mt-4">
            <Collapse
              className="!w-full border-none"
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined className="!text-white mt-2" rotate={isActive ? 90 : 0} />
              )}
            >
              {items.map((item) => (
                <Collapse.Panel
                  className="!bg-[#054fb9] rounded-[20px] text-white"
                  key={item._id}
                  header={
                    <div className="flex justify-between items-center">
                      {editMode[item._id] ? (
                        <Input className="mr-2 rounded-lg" value={editedQuestion} onChange={(e) => setEditedQuestion(e.target.value)} />
                      ) : (
                        <p className="!text-white">{item.question}</p>
                      )}
                      <div className="flex gap-2">
                        {editMode[item._id] ? (
                          <Button className="!text-[#054fb9] bg-white rounded-lg" onClick={(event) => onSaveClick(event, item._id)}>Save</Button>
                        ) : (
                          <Button className="!text-[#054fb9] bg-white rounded-lg" onClick={(event) => onEditClick(event, item._id, item.question, item.answer)}>Edit</Button>
                        )}
                        <Popconfirm
                          title="Delete FAQ"
                          onConfirm={(event) => confirmDelete(event, item._id)}
                          okText="Yes"
                          cancelText="No"
                          okButtonProps={{ style: { backgroundColor: "#054fb9", color: "#fff" } }}
                        >
                          <Button className="!text-[#dc4545] bg-white rounded-lg">Delete</Button>
                        </Popconfirm>
                      </div>
                    </div>
                  }
                >
                  {editMode[item._id] ? (
                    <Input.TextArea value={editedAnswer} onChange={(e) => setEditedAnswer(e.target.value)} />
                  ) : (
                    <p className="bg-white p-4 rounded-lg text-black">{item.answer}</p>
                  )}
                </Collapse.Panel>
              ))}
            </Collapse>
          </div>
        </div>
     
    </div>
  );
};

export default Faqs;
