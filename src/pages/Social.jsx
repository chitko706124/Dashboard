import { Button, Menu } from "@mantine/core";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Social = () => {
  return (
    <>
      <div className=" m-10">
        <div className=" lg:flex lg:justify-between container mx-auto gap-5">
          <div className=" lg:w-[70%] shadow-lg ">
            <div className="  flex p-5">
              <div className=" profileImg3 pr-4">
                <img
                  className=" rounded-full"
                  src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <div className=" flex justify-between mb-3">
                  <h5 className=" text-[#495057] font-[500]">Ashley Briggs</h5>
                  <p className=" text-[80%] text-gray-500">5m ago</p>
                </div>
                <div className=" mb-4">
                  <p className=" p-text">
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus.
                  </p>
                </div>
                <div className=" flex justify-between">
                  <img
                    className=" w-[49.5%]"
                    src="https://appstack.bootlab.io/img/photos/unsplash-2.jpg"
                    alt=""
                  />
                  <img
                    className=" w-[49.5%]"
                    src="https://appstack.bootlab.io/img/photos/unsplash-3.jpg"
                    alt=""
                  />
                </div>
                <div className=" my-1">
                  <p className=" text-gray-500 text-[80%] ">Today 7:51 pm</p>
                </div>
                <div className=" mb-4">
                  <button className=" bg-[#D9534F] px-2 py-[6px] text-[.75rem] rounded-[2px]">
                    <div className=" flex text-white">
                      <AiOutlineHeart /> Like
                    </div>
                  </button>
                </div>
                <div className=" flex pb-5">
                  <div className=" pr-4">
                    <img
                      className=" rounded-full profileImg"
                      src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <div>
                      <h5 className=" inline text-[#495057] font-[500]">
                        Stacie Hall:{" "}
                      </h5>
                      <p className=" text-gray-500 text-[96%] inline ml-1">
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
                        aliquam ultrices mauris. Integer ante arcu, accumsan a,
                        consectetuer eget, posuere ut, mauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" my-4 w-[95%] mx-auto" />
            <div className="  flex p-5">
              <div className="  pr-4">
                <img
                  className=" rounded-full profileImg3"
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  alt=""
                />
              </div>
              <div className=" ">
                <div className=" flex justify-between mb-3">
                  <h5 className=" text-[#495057] font-[500]">Chris Wood</h5>
                  <p className=" text-[80%] text-gray-500">30m ago</p>
                </div>
                <div className=" mb-4">
                  <p className=" p-text">
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </p>
                </div>

                <div className=" my-1">
                  <p className=" text-gray-500 text-[80%] ">Today 7:21 pm</p>
                </div>
                <div>
                  <button className=" bg-[#D9534F] px-2 py-[6px] text-[.75rem] rounded-[2px]">
                    <div className=" flex  text-white">
                      <AiOutlineHeart /> Like
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <hr className=" my-4 w-[95%] mx-auto" />
            <div className="  flex p-5">
              <div className=" pr-4">
                <img
                  className=" rounded-full profileImg3"
                  src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                  alt=""
                />
              </div>
              <div className=" ">
                <div className=" flex justify-between mb-3">
                  <h5 className=" text-[#495057] font-[500]">Carl Jenkins</h5>
                  <p className=" text-[80%] text-gray-500">3h ago</p>
                </div>

                <div>
                  <img
                    src="https://appstack.bootlab.io/img/photos/unsplash-1.jpg"
                    alt=""
                  />
                </div>
                <div className=" my-1">
                  <p className=" text-gray-500 text-[80%] ">Today 5:12 pm</p>
                </div>
                <div className=" mb-4">
                  <button className=" bg-[#D9534F] px-2 py-[6px] text-[.75rem] rounded-[2px]">
                    <div className=" flex text-white">
                      <AiOutlineHeart /> Like
                    </div>
                  </button>
                </div>
                <div className=" flex ">
                  <div className="  pr-4">
                    <img
                      className=" rounded-full profileImg"
                      src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <div>
                      <h5 className=" inline text-[#495057] font-[500]">
                        Stacie Hall:{" "}
                      </h5>
                      <p className=" text-gray-500 text-[96%] inline ml-1">
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
                        aliquam ultrices mauris. Integer ante arcu, accumsan a,
                        consectetuer eget, posuere ut, mauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" my-4 w-[95%] mx-auto" />
            <div className="  flex p-5">
              <div className=" pr-4">
                <img
                  className=" rounded-full profileImg3"
                  src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                  alt=""
                />
              </div>
              <div className=" w-[90%]">
                <div className=" flex justify-between mb-3">
                  <h5 className=" text-[#495057] font-[500]">Ashley Briggs</h5>
                  <p className=" text-[80%] text-gray-500">4h ago</p>
                </div>
                <div className=" mb-4">
                  <p className=" p-text">
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </p>
                </div>

                <div className=" my-1">
                  <p className=" text-gray-500 text-[80%] ">Today 7:51 pm</p>
                </div>
                <div className=" mb-4">
                  <button className=" bg-[#D9534F] px-2 py-[6px] text-[.75rem] rounded-[2px]">
                    <div className=" flex text-white">
                      <AiOutlineHeart /> Like
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-[30%]  ">
            <dir className=" p-5 shadow-lg bg-white">
              <div className=" lg:w-[50%] w-[128px] mx-auto">
                <img
                  className=" rounded-full"
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  alt=""
                />
              </div>
              <div>
                <h5 className=" text-center">Chris Wood</h5>
                <p className=" text-center">UX Engineer</p>
                <div className=" text-center">
                  <button className=" bg-blue-400 text-white px-2 py-[6px] text-[80%] mr-1">
                    Follow
                  </button>
                  <button className=" bg-blue-400 text-white px-2 py-[6px] text-[80%]">
                    Message
                  </button>
                </div>
              </div>
            </dir>
         
            <div className=" p-5 shadow-lg">
              <div className=" flex justify-between">
                <p>Following</p>
                <Menu
                  transitionProps={{ transition: "scale", duration: 500 }}
                  shadow="md"
                  position="bottom-end"
                  width={200}
                >
                  <Menu.Target>
                    <button>...</button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>Action</Menu.Item>
                    <Menu.Item>Another Action</Menu.Item>
                    <Menu.Item>Something else here</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
              <div className=" my-5"></div>
              <div className=" flex">
                <div className="">
                  <img
                    className=" rounded-full profileImg2"
                    src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                    alt=""
                  />
                </div>
                <div className="  pl-3">
                  <h5>Ashley Briggs</h5>
                  <Button variant="outline" size="xs">
                    Unfollow
                  </Button>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className=" ">
                  <img
                    className=" rounded-full profileImg2"
                    src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3">
                  <h5>Ashley Briggs</h5>
                  <Button variant="outline" size="xs">
                    Unfollow
                  </Button>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className="  ">
                  <img
                    className=" rounded-full profileImg2"
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3">
                  <h5>Ashley Briggs</h5>
                  <Button variant="outline" size="xs">
                    Unfollow
                  </Button>
                </div>
              </div>
            </div>
            <div className=" p-5 shadow-lg">
              <div className=" flex justify-between">
                <p>Activities</p>
                <Menu
                  transitionProps={{ transition: "scale", duration: 500 }}
                  shadow="md"
                  position="bottom-end"
                  width={200}
                >
                  <Menu.Target>
                    <button>...</button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>Action</Menu.Item>
                    <Menu.Item>Another Action</Menu.Item>
                    <Menu.Item>Something else here</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
              <div className=" my-5"></div>
              <div className=" flex">
                <div className=" ">
                  <img
                    className=" rounded-full profileImg "
                    src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 w-full ">
                  <div className=" float-right ">
                    <p className=" text-[80%] text-gray-400 ">5m ago</p>
                  </div>
                  <div className=" leading-[1.2]">
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Ashley Briggs
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 mr-1">
                      started following
                    </p>
                    <h5 className=" inline font-[500] text-[95%]">
                      Stacie Hall
                    </h5>
                  </div>
                  <p className=" text-[75%] text-gray-400 mt-2">
                    Today 7:51 pm
                  </p>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className="">
                  <img
                    className=" rounded-full  profileImg"
                    src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                   
                    alt=""
                  />
                </div>
                <div className=" pl-3  w-full">
                  <div className=" float-right ">
                    <p className=" text-[80%] text-gray-400 ">30m ago</p>
                  </div>
                  <div className=" leading-[1.2]">
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Chris Wood
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 mr-1">
                      posted something on
                    </p>
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Stacie Hall's
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 ">
                      timeline
                    </p>
                  </div>
                  <p className=" text-[75%] text-gray-400 mt-2">
                    Today 7:21 pm
                  </p>
                  <div className=" p-2 border">
                    <p className=" text-gray-400 text-[80%] leading-[1.3]">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam..
                    </p>
                  </div>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className="  ">
                  <img
                    className=" rounded-full profileImg"
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3  w-full">
                  <div className=" float-right ">
                    <p className=" text-[80%] text-gray-400 ">1h ago</p>
                  </div>
                  <div className=" leading-[1.2]">
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Stacie Hall
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 mr-1">
                      posted a new blog
                    </p>
                  </div>
                  <p className=" text-[75%] text-gray-400 mt-2">
                    Today 7:51 pm
                  </p>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className=" ">
                  <img
                    className=" rounded-full profileImg"
                    src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 w-full ">
                  <div className=" float-right ">
                    <p className=" text-[80%] text-gray-400 ">3h ago</p>
                  </div>
                  <div className=" leading-[1.2]">
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Carl Jenkins
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 mr-1">
                      posted something on
                    </p>
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Stacie Hall's
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 ">
                      timeline
                    </p>
                  </div>
                  <p className=" text-[75%] text-gray-400 mt-2">
                    Today 7:21 pm
                  </p>
                  <div className=" flex w-[70%] gap-2 mt-1">
                    <div>
                      <img
                        src="https://appstack.bootlab.io/img/photos/unsplash-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://appstack.bootlab.io/img/photos/unsplash-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className=" ">
                  <img
                    className=" rounded-full profileImg"
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3  w-full">
                  <div className=" float-right ">
                    <p className=" text-[80%] text-gray-400 ">1d ago</p>
                  </div>
                  <div className=" leading-[1.2]">
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Stacie Hall
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 mr-1">
                      posted a new blog
                    </p>
                  </div>
                  <p className=" text-[75%] text-gray-400 mt-2">
                    Yesterday 2:43 pm
                  </p>
                </div>
              </div>
              <hr className=" my-3" />
              <div className=" flex">
                <div className=" ">
                  <img
                    className=" rounded-full profileImg"
                    src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 w-full ">
                  <div className=" float-right ">
                    <p className=" text-[80%] text-gray-400 ">1d ago</p>
                  </div>
                  <div className=" leading-[1.2]">
                    <h5 className=" inline font-[500] text-[95%] mr-1">
                      Chris Wood
                    </h5>
                    <p className=" inline text-[90%] text-gray-500 mr-1">
                      started following{" "}
                    </p>
                    <h5 className=" inline font-[500] text-[95%] ">
                      Stacie Hall's
                    </h5>
                  </div>
                  <p className=" text-[75%] text-gray-400 mt-2">
                    Yesterdag 1:51 pm
                  </p>
                </div>
              </div>
              <hr className=" my-3" />
              <div>
                <button className=" bg-blue-400 text-white w-full py-[6px] rounded">Load more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
