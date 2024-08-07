import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
  Button
} from '@nextui-org/react'

export default function InstructionsModal () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen}>How it works</Button>
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent className='bg-gray-900 text-white'>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <h3 className='text-xl font-bold'>How it works</h3>
              </ModalHeader>
              <ModalBody className='text-gray-300'>
                <p>
                  Our application leverages advanced AI to automatically
                  retrieve email attachments from Gmail and classify them into
                  pre-defined categories based on the email content. This
                  classification process occurs nightly, encompassing all emails
                  received that day. Subsequently, the attachments are
                  transferred directly to Google Drive into folders
                  corresponding to their respective categories.
                </p>
                <p>
                  Upon authentication with Gmail and Google Drive, folders
                  matching your specific categories are created in your Google
                  Drive.
                </p>
                <p class="font-semibold mt-2 mb-2">
                  We prioritize your privacy and do not store any of your email
                  contents in our database. We employ best practices to ensure
                  your data remains secure.
                </p>
              </ModalBody>
              <ModalFooter className='text-gray-300'>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                  <Link href='/categories/0/null'>
                  <Button color='primary' onPress={onClose}>
                  Get started
                    </Button>
                  </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
